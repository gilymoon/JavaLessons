function requestUserData(userId, callback){
    if(userId === 'broken'){
        callback(null, 'Failed to load user data');
    }
    else{

        setTimeout(callback(), Math.random()*3);
    }
}