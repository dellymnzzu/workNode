setImmediate(()=>{
    console.log('immediate');
});
process.nextTick(()=>{  // 프로세스라 제일 빠르게 나올 수 밖에 없다. 
    console.log('nextTick');
});
setTimeout(()=>{
    console.log('timeout');
},0);
Promise.resolve().then(()=>{console.log('promise')});