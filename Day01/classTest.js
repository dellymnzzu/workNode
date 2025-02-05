var Human = function(type){ // 클래스명
    this.type = type || 'human';  // 생성자자
};
// 클래스 선언 
Human.isHuman = function(human){   // isHuman은 스태틱 함수이다.
    return human instanceof Human;
}

Human.prototype.breathe = function(){  // 멤버 함수수
    alert('h-a-a-a-m');
};

var Zero = function(type,firstName, lastName){ //클래스명
    Human.apply(this.arguments);  // Zero가 Human 상속 받음음
    this.firstName = firstName;
    this.lastName = this.lastName;
}
Zero.prototype = Object.create(Human.prototype);  // 
Zero.prototype.constructor = Zero; //상속하는 부분
Zero.prototype.sayName = function(){
    alert(this.firstName+' '+this.lastName);
};

var oldZero = new Zero('a','Zero','Cho');
console.log(Human.isHuman(oldZero)); // true
console.log(oldZero.firstName);
console.log(oldZero.lastName);
console.log(oldZero.type);