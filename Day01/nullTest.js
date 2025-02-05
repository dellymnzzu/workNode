const a=0;
const b=a||3; 
console.log(b);

const c = 0;
const d = c ?? 3;  // ??는 null이거나 undefined가 아닌 이상 데이터로 봐서 0으로 본다. 
console.log(d);

const e = null;
const f = e??3;  // null이니까 뒤로 간다.
console.log(f);

const g = undefined;
const h = g??3;
console.log(h);

const i = null;

i?.d;  
i?.x();
//에러가 안 나오는 이유는 ?뒤가 있으면 null이라도 죽지 않는다. 