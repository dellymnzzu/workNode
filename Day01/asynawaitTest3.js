const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () =>{
    for await (promise of [promise1,promise2]){  // of는 foEach와 같다고 생각하면 된다.
        console.log(promise);
    }
})();