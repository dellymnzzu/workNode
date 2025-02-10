const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const { sequelize } = require('./models');
const indexRouter = require('./routes');  //index.js
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');

const app = express();
app.set('port', process.env.PORT || 3001);
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

sequelize.sync({force:false}) // true이면 서버를 실행할 때 마다 테이블 재생성 
.then(()=>{
    console.log('디비 연결 성공');
}).catch((err)=>{
    console.error(err);
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));  //public 이 빠진 이유는 public 폴더로 잡아놔서 그냥 불러도 되는거였다.
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/',indexRouter);
app.use('/users',usersRouter);
app.use('/comments',commentsRouter);
//사용한다고 app.use를 사용

app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  });
  
  app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
  });