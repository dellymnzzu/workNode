const array = ['nodejs',{},10,true];

/*
var node = array[0];
var obj = array[1];
var bool = array[3];

*/

const [node,obj, , bool] = array;
console.log(node);
console.log(obj);
console.log(bool);

