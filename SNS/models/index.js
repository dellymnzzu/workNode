
const Sequelize = require('sequelize');  // 디비연동동
const User = require('./user');
const Post = require('./post');
const Hashtag = require('./hashtag');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];  //

const db={};  // 디비 객체만들었다.
const sequelize = new Sequelize(config.database,config.username,config.password,config,);  // 설정하기기

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Hashtag = Hashtag;

User.initiate(sequelize);
Post.initiate(sequelize);
Hashtag.initiate(sequelize);

User.associate(db);
Post.associate(db);
Hashtag.associate(db);

module.exports = db;




