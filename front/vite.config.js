import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
      cors: true,
      proxy: {
        '/api': {
          target: env.VITE_API_URL || 'http://124.70.213.60:3001',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
          ws: true
        },
        '/chat-api': {
          target: 'https://chat.intern-ai.org.cn',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/chat-api/, ''),
          secure: false
        }
      }
    },
  }
})
