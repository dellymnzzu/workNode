const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static initiate(sequelize){
        return super.init({
            email:{
                type:Sequelize.STRING(40),
                allowNull : true,
                unique : true,
            },
            nick :{
                type : Sequelize.STRING(15),
                allowNull : false,
            },
            password : {
                type: Sequelize.STRING(100),
                allowNull :true,
            },
            provider :{
                type : Sequelize.STRING(10),
                allowNull : false,
                defaultValue : 'local',
            },
            snsId : {
                type : Sequelize.STRING(30),
                allowNull : true,
            },
        },{
            sequelize,
            timestamps : true,
            underscored : false,
            modelName : 'User',
            tableName : 'users',
            paranoid : true,
            charset : 'utf8',
            collate : 'utf8_general_ci',
        
        });
    }
    static associate(db){  // 이걸 사용하면 1:n 관계 같은 관계를 이용할 수 있다. 
        db.User.hasMany(db.Post);
        db.User.belongsToMany(db.User,{//팔로잉은 사용자 한명이 팔로워를 ㄱ여러명 가질 수 있고 한 사람이 여러명 팔로우 할 수 있기 때문에 User모델과 User 모델간에 N:M 관계가 된다.
        foreignKey : 'followingId',  // 
        as:'Followers',
        through:'Follow',    
        });
        db.User.belongsToMany(db.User,{//팔로우
            foreignKey : 'followerId',
            as : 'Followings',
            through : 'Follow',    
        });
    }
};