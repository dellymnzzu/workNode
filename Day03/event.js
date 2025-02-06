const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1',()=>{  // event1 생성
    console.log('이벤트 1');
});
myEvent.on('event2',()=>{
    console.log('이벤트 2');
});
myEvent.on('event2',()=>{
    console.log('이벤트 2 추가');
});
myEvent.once('event3',()=>{  // 한번만 실행한다는 뜻뜻
    console.log('이벤트 3');
}); // 한 번만 실행됨

myEvent.emit('event1');//이벤트 호출 -> 강제로 호출출
myEvent.emit('event2');//이벤트 호출

myEvent.emit('event3');//이벤트 호출
myEvent.emit('event3');//실행 안됨됨 -> once이기 때문에 하번밖에 실행이 안되섯 ㅣㄹ행이 안된다.

myEvent.on('event4',()=>{
    console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');  // 이벤트를 지운다.
myEvent.emit('event4'); //실행 안 됨

// 화살표 함수
const listener = ()=>{
    console.log('이벤트 5');
};

myEvent.on('event5',()=>{
    console.log('이벤트 5');
});
myEvent.on('event5',listener);
myEvent.removeAllListeners('event5');
myEvent.emit('event5'); //실행 안 됨

console.log(myEvent.listenerCount('event2')); // 몇번 실행되는지 확인인