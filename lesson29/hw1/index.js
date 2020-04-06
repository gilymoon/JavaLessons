function requestUserData(userId, callback){
    const obj = {'userId': `${userId}`, email: `${userId}@example.com`};
    if(userId === 'broken'){
        callback(null, 'Failed to load user data');
    }
    else{

        setTimeout(callback(obj), Math.random()*(3000-1000)+1000);
    }
}

export {requestUserData}