import './style.css';
const CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;     // 환경 변수에서 클라이언트 ID 가져오기
const CLIENT_SECRET = import.meta.env.VITE_NAVER_CLIENT_SECRET; // 환경 변수에서 클라이언트 시크릿 가져오기console.log(CLIENT_ID, CLIENT_SECRET);
//console.log(CLIENT_ID, CLIENT_SECRET); // 제

const url = '/api/v1/search/news.json?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&sort=sim'; // .json으로 변경

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const events = document.querySelectorAll('.event-item');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // 버튼 활성화 표시 갱신
      buttons.forEach(btn => btn.classList.remove('active1'));
      button.classList.add('active1');

      const filter = button.getAttribute('data-filter');

      events.forEach(event => {
        const category = event.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          event.style.display = 'block';
        } else {
          event.style.display = 'none';
        }
      });
    });
  });
});

fetch(url, {
  method: 'GET',
  headers: {
    'X-Naver-Client-Id': CLIENT_ID,
    'X-Naver-Client-Secret': CLIENT_SECRET
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok: ' + response.status);
  }
  return response.json(); // JSON 형식으로 응답 받기
})
.then(data => {
  console.log(data); // JSON 데이터 출력
})
.catch(error => {
  console.error('Fetch error:', error);
});

