const passport = require('passport');
const kakaoStrategy = require('passport-kakao').Strategy;

const User = require('../models/user');

module.exports = ()=>{
    passport.use(new kakaoStrategy({  //카카오톡 로그인 할거야. 
        clientID : process.env.KAKAO_ID,  // 카카오톡 클라이언트 아이디 
        callbackURL : '/auth/kakao/callback',

    }, async(accessToken,refreshToken,profile,done)=>{
        console.log('kakao profile', profile);
        try{
            const exUser = await User.findOne({
                where : {snsId : profile.id, provider : 'kakao'},
            });
            if(exUser){
                done(null,exUser);
            }else{
                const newUser = await User.create({
                    email:profile._son?.kakao_account?.email,
                    nick : profile.displayName,
                    snsId:profile.id,
                    provider : 'kakao',
                });
                done(null,newUser);
        }

    }catch(error){
        console.error(error);
        done(error);
    }
    }));
};