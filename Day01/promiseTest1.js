const condition = false; // true면 resolve, false면 reject
const promise = new Promise((resolve,reject) => {
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});
// 다른 코드가 들어갈 수 있음
promise
.then((message) =>{
    console.log(message); //성공한 경우 실행
})
.catch((error)=>{
    console.log(error); //실패한 경우 실행
})
.finally(()=>{ //끝나고 무조건 실행행
    console.log('무조건');
});