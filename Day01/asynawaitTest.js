async function findAndSaveUser(Users) {  // async는 프로미스랑 같다고 생각하면 된다. 
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({gender : 'm'});
    //생략 
    
}