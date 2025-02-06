const http = require('http');


const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type': 'text/html; charset=utf-8'});  // 헤더에다가 200(올바른 요청),html 넣어준다.
    res.write('<h1>Hello Node! </h1>');  // helloNode로 써준다.
    res.end('<p>Hello Server!</p>'); 
});
server.listen(8080);  // 8080을 따로 뺐다.

server.on('listening',()=>{  
    console.log('8080번 포트에서 서버 대기 중 입니다.');
});

server.on('error',(error)=>{  // 에러 추가
    console.error(error);
});