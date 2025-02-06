const cluster = require('cluster');
const { sign } = require('crypto');
const http = require('http');
const numCPUs = require('os').cpus().length;
if(cluster.isMaster){
    console.log(`마스터 프로세스 아이디 : ${process.pid}`);
    //cpu 개수만큼 워커를 생산
    for(let i = 0; i<numCPUs; i+=1){
        cluster.fork();  //fork는 프로세스를 만드는 것이다. 
    }
    //워커가 종료되었을 때 
    cluster.on('exit',(work,code,signal)=>{
        console.log(`${workerData.process.pid}번 워커가 종료되었습니다.`);
        console.log('code',code,'signal',signal);
        cluster.fork();
    });


}else{
    //워커들이 포트에서 대기
    http.createServer((req,res)=>{
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.write('<h1>Hello Node!</h1>');
        res.end('<p>Hello Cluster</p>');
        setTimeout(()=>{
            //워커 존재를 확인하기 위해 1초마다 강제 종료
            process.exit(1);
        },1000);  // 1초마다 타임 아웃하게 만들었다. 
    }).listen(8086);

    console.log(`${process.pid}번 워커 실행`);
}