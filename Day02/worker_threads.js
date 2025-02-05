const{
    Worker, isMainThread,parentPort,
} = require('worker_threads');

if(isMainThread){
    //부모일 때
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('form worker', message));
    worker.on('exit', () => console.log('form exit'));
    worker.postMessage('ping');

}else{
    //워커일대
    parentPort.on('message',(value)=>{
        console.log('from parent',value);
        parentPort.postMessage('pong');
        parentPort.close();
    });
}