const m = new Map();

m.set('a','b'); // a->key,b ->value
m.set(3,'c');
m.set({a:'b'},'e');
console.log(m);
console.log(m.size);

const s = new Set();
s.add(false);
s.add(5);
s.add('hello');
s.add(5);//중복이라 무시
console.log(s.size);

const arr = [1,3,2,7,2,6,3,5];

const x = new Set(arr); //중복제거
const result = Array.from(x);
console.log(result);