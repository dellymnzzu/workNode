const http = require('http');
const fs = require('fs').promises;

http.createServer(async(req,res)=>{  
    try{
    const data = await fs.readFile('./server2.html');  //꼭 파일 시스템을 써야한다. 
    res.writeHead(200,{'content-Type': 'text/html; charset=utf-8'});  
    res.end(data); 
    }catch(err){
        console.error(err);
        res.writeHead(500,{'Content-Type':  'text/plain; charset=utf-8'});
        res.end(err(err.message))
    }
})

.listen(8081,()=>{  
    console.log('8081번 포트에서 서버 대기중입니다!');
});


