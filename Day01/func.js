const {odd , even} = require('./var');  // 구조분해 할당당

function checkOddOrEven(num){
    //1이면 true, 0이면 false
    if(num%2){  // 홀수면면
        return odd;
    }
    return even;
}


module.exports = checkOddOrEven;