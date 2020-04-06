function requestUserData(userId, callback){
    const obj = {name: 'John', 'userId': `${userId}`};
    if(userId === 'broken'){
        callback(null, 'Failed to load user data');
    }
    else{

        setTimeout(callback(obj), Math.random()*3);
    }
}

export {requestUserData}