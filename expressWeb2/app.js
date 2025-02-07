const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();  // 쿠키관련된 key를 .env파일에 숨겨놓을 예정이다. (보안관련련)
const app = express();
app.set('port', process.env.PORT || 3000);


//use는 미들웨어라고 생각하면된다. 순차적으로 실행한다.
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));  // 라우터 역활이라 풀 경로를 넣어야 한다. public 폴더를 올린다는 뜻.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));  // 동봉된 쿠키를 해석해서 req.cookies 객체로 만든다. 
app.use(session({  // 세션을 만든다. 
  resave: false, // 다시저장을 막는다. 왜냐면 과부화가 걸리기 때문에 
  saveUninitialized: false,  // 초기화를 하는 save를 안 할것이다. 라는 설정정
  secret: process.env.COOKIE_SECRET,  // .env에 들어있는 쿠키 값을 가져온다.
  cookie: {  
    httpOnly: true,  // http에 사용할 예정정
    secure: false,  // 보안 관련된 것 https를 사용하면 무조건 secure를 true로 해야한다.
  },
  name: 'session-cookie',
}));

const multer = require('multer');
const fs = require('fs');

try{
    fs.readdirSync('uploads');

}catch(error){
    console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}
const upload = multer({
    storage : multer.diskStorage({
        destination(req,file,done){  //목적지지
            done(null,'uploads/');
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname);  // 확장자명명
            done(null,path.basename(file.originalname,ext)+Date.now()+ext);  // 일불 이상하게 만든다.
        },
    }),
    limits:{fileSize:5*1024*1024},
});
app.get('/upload',(req,res)=>{
    res.sendFile(path.join(__dirname,'multipart.html'));
}); 
app.post('/upload',upload.array('image'),(req,res)=>{
    console.log(req.file);
    res.send('ok');
});  
app.get('/',(req,res,next)=>{
    console.log('GET / 요청에만 실행됩니다.');
    next();
},(req,res)=>{
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
});
app.use((err,req,res,next)=>{
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => { 
  console.log(app.get('port'), '번 포트에서 대기 중');
});

