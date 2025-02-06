const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const parseCookies = (cookie = '') =>   // 쿠키를 받았다면 (쿠키가 없다면 ''로 디폴트값 간다.)
  cookie  // 쿠키
    .split(';')  // 쿠키를 자른다. ;기준으로 
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {  // acc는 비어있는 값을 생각각하면된다.
      acc[k.trim()] = decodeURIComponent(v);
      return acc;  // acc는 cookies.name님 안녕하세요가 나오게 된다. 
    }, {});

http.createServer(async (req, res) => {
console.log(req.headers.cookie);  // 쿠키의 값 확인 
  const cookies = parseCookies(req.headers.cookie); // { mycookie: 'test' } -> 쿠키를 시작 할 때 parseCookies를 가장 먼저 실행된다.
  // 주소가 /login으로 시작하는 경우
 
  if (req.url.startsWith('/login')) {
    const url = new URL(req.url, 'http://localhost:8084');
    const name = url.searchParams.get('name');
    const expires = new Date();
    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    expires.setMinutes(expires.getMinutes() + 5);  // 5분 지나면 로그아웃 하게 만드는 것 
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,  // 5분동안 쿠키를 사용할 수 있게 했다. 
    });  // httpOnly는 설정 시 자바스크립트에서 쿠키에 접근할 수 없다. 쿠키 조작을 방지하기 위해 설정하는게 좋다.
    res.end();
  // name이라는 쿠키가 있는 경우
  } else if (cookies.name) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${cookies.name}님 안녕하세요`);
  } else {
    try {
      const data = await fs.readFile(path.join(__dirname, 'cookie2.html'));
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
})
  .listen(8084, () => {
    console.log('8084번 포트에서 서버 대기 중입니다!');
  });