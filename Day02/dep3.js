const dep1 = require('./dep1');
const dep2 = require('./dep2');

dep1();
dep2();

//에러가 나는 이유 : dep1과 dep2가 서로를 참조하고 있기 때문에
// 객체 생성 시점에서 무한루프가 빠질 수 있기 때문에 프로그램이 정상적으로 작동하지 않는다. 
