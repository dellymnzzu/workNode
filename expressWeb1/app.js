const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use((req,res,next)=>{
console.log('모든 요청에 다 실행이 됩니다.');
    next();  // 콘솔을 찍은 후 다음으로 보내준다는 뜻뜻
})

app.get('/', (req, res,next) => {
console.log("/GET");
next();  // 콘솔을 찍은 후 next로 보내준다. (error로 보내준다.)
},(req,res)=>{
    throw new Error('에러');
});

app.use((err,req,res,next)=>{
    console.error(err);
    res.status(500).send(err.message);
})

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});