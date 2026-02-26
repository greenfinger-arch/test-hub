export default defineConfig({
  plugins: [react()],
  base: './', // 핵심: 어떤 환경변수도 필요 없이 './'로 통일하세요.
})
