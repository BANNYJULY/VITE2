import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://openapi.naver.com',  // 네이버 API 서버 URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,  // SSL 인증서에 문제가 있을 경우 false로 설정
      },
    },
  },
});

