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

var getCandy = candyMachine.getCandy; //구조 분해 할당
console.log(candyMachine.getCandy());
var count = candyMachine.status.count;
console.log(count);
//console.log(getCandy()); // count를 읽을 수 없기 때문에 왜냐면 candyMachine에서 가져오지 않았으니까.
