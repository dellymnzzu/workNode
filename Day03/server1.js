const http = require('http');

http.createServer((req,res)=>{  // 요청이 오면 응답이 어떻게 올 지 정해줘야한다. 세팅을 해준 모습습
    res.writeHead(200,{'content-Type': 'text/html; charset=utf-8'});  // 헤더에다가 200(올바른 요청),html 넣어준다.
    res.write('<h1>Hello Node! </h1>');  // helloNode로 써준다.
    res.end('<p>Hello Server!</p>'); 
})
.listen(8080,()=>{  // 서버연결 8080번 포트가 나오게 된다면 helloNode가 나오게 된다. 
    console.log('8080번 포트에서 서버 대기중입니다!');
});