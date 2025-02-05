function lrt(){
    console.log("작업 끝");
}//논 블로킹 : 비동기라고 생각하면 됨됨

console.log('시작');
setTimeout(lrt,0); //0초라도 백그라운드에 있기 때문에 다음 작업보다 느린건 어쩔 수 없다. 
console.log('다음작업');