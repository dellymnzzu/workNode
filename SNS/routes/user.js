const express = require('express');

const {isLoggedIn} = require('../middlewares');
const {follow} = require('../controllers/user');
const { render } = require('nunjucks');
const { renderHashtag } = require('../controllers/page');

const router = express.Router();

router.use((req,res,next)=>{
    res.locals.user = req.user;
    res.locals.followerCount = req.user?.Followers?.length || 0;
    res.locals.followingCout = req.user?.Followings?.length ||0;
    res.locals.followingIdList = req.user?.Followings?.map(f=>f.id) || [];
    next();
})

router.get('/hastag',renderHashtag);
router.post('/:id/follow',isLoggedIn,follow);

module.exports = router;