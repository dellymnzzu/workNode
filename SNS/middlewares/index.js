exports.isLoggedIn = (req,res,next)=>{
    if(req.isAuthenticated()){  // 인증이 되어있다면?
        next();
    }else{
        res.status(403).send('로그인 필요');
    }
};
exports.isNotLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){ //인증이 되어있지 않다면?
        next();
    }else{
        const message = encodeURIComponent('로그인 상태입니다.');
        res.redirect(`/?error=${message}`);
    }
};