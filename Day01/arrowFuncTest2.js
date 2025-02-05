var relationshop1={
    name : 'Zero',
    firends:['nero','hero','xero'],
    logFriends:function(){
        var that = this; // relationship1을 가리키는 this를 that에 저장
        this.firends.forEach(function(firend){
            console.log(that.name,firend);
        });
    },
};
relationshop1.logFriends();

const relationshop2 = {
    name : 'Zero',
    firends:['nero','hero','xero'],
    logFriends(){
        this.firends.forEach(function(firend){
            console.log(this.name,firend);
        });
    },
};
relationshop2.logFriends();

