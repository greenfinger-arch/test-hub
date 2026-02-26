import { defineConfig } from 'vite' // 이 줄이 꼭 있어야 합니다!
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 핵심: 상대 경로 빌드. 이 앱이 어떤 폴더(/flower 등)에 있든 작동하게 합니다.
  base: './', 
})
