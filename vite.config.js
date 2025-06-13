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

document.addEventListener("DOMContentLoaded", function () {
  // 모든 nav 메뉴 링크 선택
  const menuLinks = document.querySelectorAll("nav ul li a");

  menuLinks.forEach(link => {
      link.addEventListener("click", function (e) {
          e.preventDefault(); // 기본 동작 방지 (페이지 이동 막기)

          const targetId = this.getAttribute("href").substring(1); // '#home' -> 'home'
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop,
                  behavior: "smooth"
              });
          }
      });
  });
});