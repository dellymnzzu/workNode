const {Worker, isMainThread,parentPort,worketData} = require('worker_threads');

const min = 2;
const primes = [];

function findPrimes(start,range){
    let isPrime = true;
    const end = start+range;
    for(let i = start; i <end; i++){
        for(let j = min; j<Math.sqrt(end); j++){
            if(i !==j&& i%j ===0){// 만약 소수라면
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primes.push(i);
        }
        isPrime = true;
}
}

if(isMainThread){
    const max = 10000000;
    const threadCount = 8;
    const threads = new Set();
    const range = Math.ceil((max - min)/ threadCount);
    let start = min;
    console.time('prime');
    //워커 쓰레드 생성

    for(let i = 0; i< threadCount-1; i++){
        const wStart = start;
        threads.add(new Worker(__filename,{worketData: {start: wStart,range}}));
        start += range;
    }
    threads.add(new Worker(__filename,{worketData:{start, range:range + ((max-min+1)%threadCount)}}));
    //총 9개 워크 -> 하나씩 빼면서 세팅
    for(let worker of threads){
        //on 리스너를 각자 워커 쓰레드에 장착
        worker.on('error',(err)=>{
            throw err;
        });
        worker.on('exit',()=>{
            threads.delete(worker);
            if(threads.size ===0){
                console.timeEnd('prime');
                console.log(primes.length);
            }
        });
        worker.on('message', (msg)=>{
            primes = primes.concat(msg);
        });

    }

} else{
    findPrimes(worketData.start, worketData.range);
    parentPort.postMessage(primes);
}