import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // 빌드할 때 던져주는 이름(예: flower, apple)을 base 경로로 사용합니다.
  const appName = process.env.APP_NAME || 'default'; 

  return {
    plugins: [react()],
    base: `/${appName}/`, 
  }
})
