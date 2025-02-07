const Sequelize = require('sequelize');

class User extends Sequelize.Model{
    static initiate(sequelize){
        User.init({
            name:{
                type:Sequelize.STRING(20),
                allowNull : false,  // null 허요아는지 아닌지 
                unique : true,
            },
            age : {
                type:Sequelize.INTEGER.UNSIGNED,  // 양수만 된다. 
                allowNull : false,
            },
            married:{
                type:Sequelize.BOOLEAN,  //true false
                allowNull:false,
            },
            Comment:{
                type : Sequelize.TEXT,  // 문자자
                allowNull : true,
            },
            created_at : {
                type:Sequelize.DATE,  // 현재 날짜짜
                allowNull : false,
                defaultValue : Sequelize.NOW,  
            },
        },{
            sequelize,
            timestamps : false,
            undercored : false,
            modelName:'User',
            tableName : 'users',
            paranoid:false,  // 지우면 휴지통처럼 보관하게하는거 근데 false로 하면 바로 날라간다.
            charset:'utf8',
            collate:'utf8_general_ci',  //ㅇㅇ
        });
    }

    // USER <-> COMMENT
    //  1          N
    static associate(db) {
        //맵핑
        db.User.hasMany(db.Comment, { foreignKey : 'commenter', soucrcekey : 'id'});
    }
};


module.exports = User;