import { Question, Category } from '../types/questions';

export const categories: Category[] = [
  {
    id: 'values',
    title: '价值观',
    description: '关于个人价值观和影响的问题',
    baseNumber: 1
  },
  {
    id: 'ability',
    title: '能力',
    description: '关于能力和经验的问题',
    baseNumber: 2
  },
  {
    id: 'wishes',
    title: '愿望与梦想',
    description: '关于你的愿望和观点的问题',
    baseNumber: 3
  }
];

export const questions: Question[] = [
  // 价值观问题
  {
    id: 'admired-person',
    serialNumber: '101',
    text: '你有崇拜的人么（至少写一人）？你为什么喜欢/崇拜ta？喜欢/崇拜什么地方？',
    category: 'values',
    answer: '',
    elaboration: ''
  },
  {
    id: 'gratitude',
    serialNumber: '102',
    text: '你有想要感谢的人和事么？说明原因。',
    category: 'values',
    answer: '',
    elaboration: ''
  },

  // 能力问题
  {
    id: 'fulfilling-experience',
    serialNumber: '201',
    text: '目前人生最充实的一段经历是什么？',
    category: 'ability',
    answer: '',
    elaboration: ''
  },
  {
    id: 'strengths',
    serialNumber: '202',
    text: '你擅长什么？',
    category: 'ability',
    answer: '',
    elaboration: ''
  },
  {
    id: 'alternative-career',
    serialNumber: '203',
    text: '如果放弃现在的工作/事业/学业，你想干什么？',
    category: 'ability',
    answer: '',
    elaboration: ''
  },

  // 愿望与梦想问题
  {
    id: 'willing-to-learn',
    serialNumber: '301',
    text: '哪件事情就算花钱也愿意学？',
    category: 'wishes',
    answer: '',
    elaboration: ''
  }
];
