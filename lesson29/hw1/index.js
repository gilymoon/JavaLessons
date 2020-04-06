function requestUserData(userId, callback){
    const obj = {'userId': `${userId}`, email: `${userId}@example.com`};
    if(userId === 'broken'){
        callback(null, 'Failed to load user data');
    }
    else{

        setTimeout(callback(obj), Math.random()*(3-1)+1);
    }
}

export {requestUserData}