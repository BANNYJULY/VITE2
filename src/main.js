import './style.css';
const CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;     // 환경 변수에서 클라이언트 ID 가져오기
const CLIENT_SECRET = import.meta.env.VITE_NAVER_CLIENT_SECRET; // 환경 변수에서 클라이언트 시크릿 가져오기console.log(CLIENT_ID, CLIENT_SECRET);
//console.log(CLIENT_ID, CLIENT_SECRET); // 제

const url = '/api/v1/search/news.json?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&sort=sim'; // .json으로 변경

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