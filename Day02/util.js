const util = require('util');
const crypto = require('crypto');
const {error} = require('console');

const dontUseMe = util.deprecate((x,y)=>{  // 없어질 예정이라 웬만하면 쓰지 않기
    console.log(x+y);
},'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요.');

dontUseMe(1,2);

const randomBytesPromise = util.promisify(crypto.randomBytes); 
randomBytesPromise(64)
.then((buf)=>{
    console.log(buf.toString('base64'));
})
.catch((error)=>{
    console.log(error);
})