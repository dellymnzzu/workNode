const { Post, Hashtag } = require('../models');

exports.afterUploadImage = (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });  // 나오면 이미지가 나오게 한다. 
};

exports.uploadPost = async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      img: req.body.url,
      UserId: req.user.id,
    });  // 저장장
    const hashtags = req.body.content.match(/#[^\s#]*/g);  // 정규화표현식이다. 
    if (hashtags) {  // 해시태그가 있다면? 
      const result = await Promise.all(
        hashtags.map(tag => {  // 태그가 여러개일경우가 있으니까까
          return Hashtag.findOrCreate({
            where: { title: tag.slice(1).toLowerCase() },  // 소문자로 변경해서 넣어서 찾거나 없으면 만든다.
          })
        }),
      );
      await post.addHashtags(result.map(r => r[0]));  // 추가하고 있다.
    }
    res.redirect('/');  // 다시 돌아간다. 
  } catch (error) {
    console.error(error);
    next(error);
  }
};