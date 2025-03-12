import axios from 'axios';
import { generateReportPrompt } from './reportPrompt';

/**
 * 通过调用GPT接口生成AI报告
 * @param {Object} questionnaireData - 问卷数据
 * @returns {Promise<string>} 生成的报告内容
 */
export async function fetchReport(questionnaireData) {
    const prompt = generateReportPrompt(questionnaireData);
    try {
        const response = await axios.post('/chat-api/api/v1/chat/completions', {
            messages: [
                {
                    role: "system",
                    content: "你是一个专业的问卷回答师，且你的回答不超过100字。"
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            model: "internlm3-8b-instruct",
            temperature: 0.8,
            top_p: 0.9
        }, {
            headers: {
                'Authorization': `Bearer eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJqdGkiOiI1MDIwNjE4NiIsInJvbCI6IlJPTEVfUkVHSVNURVIiLCJpc3MiOiJPcGVuWExhYiIsImlhdCI6MTc0MTc2MDA3NSwiY2xpZW50SWQiOiJlYm1ydm9kNnlvMG5semFlazF5cCIsInBob25lIjoiMTg3MzU3Mzg5MzkiLCJ1dWlkIjoiZDdlODZkMjMtZTBkYy00NDhjLWJiNmItNWMxNWIwMDY5ZTYyIiwiZW1haWwiOiJ6aHVsaWRlcmJAZ21haWwuY29tIiwiZXhwIjoxNzU3MzEyMDc1fQ.HWUZK68DL-Ka3AjRpjaw4tYg7C3UrO-eOUDJBqJwLo5qxhX1Thr3R-Had23m283Gu-IZqhvQz3guEaHrnLIbvA`,
                'Content-Type': 'application/json'
            }
        });

        const content = response.data.choices[0].message.content;

        // 尝试清理和解析返回的内容
        let cleanContent = content;
        console.log('cleanContent 22', cleanContent)
        // 移除可能的markdown标记
        if (cleanContent.includes('```json')) {
            cleanContent = cleanContent.replace(/```json\n|\n```/g, '');
        }

        // 验证JSON格式
        try {
            JSON.parse(cleanContent);
            return cleanContent;
        } catch (parseError) {
            console.error('JSON解析错误:', parseError);
            throw new Error('AI返回的内容格式不正确');
        }
    } catch (error) {
        console.error('API调用错误:', error);
        throw error;
    }
}
