// 오래된 버전 
 var sayNode = function(){
    console.log('Node');
};  // sayNode(){}라 생각하면된다. 

//     var es = 'ES';

//     var oldObject = {
//         sayJs : function(){
//             console.log('JS');
//         }, 
//         sayNode:sayNode,  // sayNode라는 이름을 sayNode를 쓰겠다고 생각한다.
//     };
// // 객체를 나와도 중간에 변수를 선언할 수 있다. 
//     oldObject[es+6] = 'Fantastic';  // ES6으로 생각하면된다. ES6 = Fantastic이다라고 생각하면 된다. 
//     oldObject.sayNode();  //Node
//     oldObject.sayJs();  //JS
//     console.log(oldObject.ES6);  // Fantastic


//새로운 버전
const newObject = {
    sayJs(){
        console.log('JS');
    },
    sayNode,
    [es+6] : 'Fantastic',
};
newObject.sayNode(); //Node
newObject.sayJs(); // JS
console.log(newObject.ES6); // Fantastic

    

