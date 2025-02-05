class Human {
    //생성자
    constructor(type = 'human'){
        this.type = type;
    }
    //static 함수
    static isHuman(human){
        return human instanceof Human;
    }
    //객체 함수 
    breathe(){
        alert('h-a-a-a-m');
    }
}

class Zero extends Human{
    constructor(type,firstName,lastName){
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);

    }
}

const newZero = new Zero('human', 'Zero', 'cho');
Human.isHuman(newZero); //true