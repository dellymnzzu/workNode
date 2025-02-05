var candyMachine ={
    status : {
        name: 'node',
        count : 5,
    },  // status도 객체이다.
    getCandy: function(){  // 함수수
        this.status.count--;
        return this.status.count;
    },
};

const {getCandy,status : {count} } = candyMachine;  //구조분해 할당

console.log(candyMachine.getCandy());
console.log(candyMachine.status.name);