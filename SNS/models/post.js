const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model{
    static initiate(sequelize){
        return super.init({
            content : {
                type : Sequelize.STRING(140),
                allowNull : false,
            },
            img : {
                type : Sequelize.STRING(200),
                allowNull : true,
            },
        },{
            sequelize,
            timestamps : true,
            underscored : false,
            modelName : 'Post',
            tableName : 'posts',
            paranoid : false,
            charset : 'utf8mb4',  // 이미지가 들어가기 때문에 mb4가 들어간다. 
            collate : 'utf8mb4_general_ci'
        });
    }
    static associate(db){  // 
        db.Post.belongsTo(db.User);  //1(User):N(Post) 관계계
        db.Post.belongsToMany(db.Hashtag,{through:'PostHashtag'});  // Post와 Hashtag모델은 n:m관계이다. 

    }


};