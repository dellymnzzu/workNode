const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass,salt,1000000,128,'sha512',()=>{
    console.log('1: ',Date.now() - start);
});

crypto.pbkdf2(pass,salt,1000000,128,'sha512',()=>{
    console.log('2: ',Date.now() - start);
});
crypto.pbkdf3(pass,salt,1000000,128,'sha512',()=>{
    console.log('3: ',Date.now() - start);
});
crypto.pbkdf4(pass,salt,1000000,128,'sha512',()=>{
    console.log('4: ',Date.now() - start);
});
crypto.pbkdf5(pass,salt,1000000,128,'sha512',()=>{
    console.log('5: ',Date.now() - start);
});
crypto.pbkdf6(pass,salt,1000000,128,'sha512',()=>{
    console.log('6: ',Date.now() - start);
});
crypto.pbkdf7(pass,salt,1000000,128,'sha512',()=>{
    console.log('7: ',Date.now() - start);
});
crypto.pbkdf8(pass,salt,1000000,128,'sha512',()=>{
    console.log('8: ',Date.now() - start);
});

// 스레드 풀이 몇개가 있는지 확인이간으하다 
//암호화를 8개를 하고 있다.
//결과를 보면 스레드 풀이 4개를 가지고 있다는것을 알 수 있다. 