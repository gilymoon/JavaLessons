function requestUserData(userId, callback){
    const obj = {'userId': `${userId}`, email: `${userId}@example.com`};
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
      }
    if(userId === 'broken'){
        setTimeout(callback(null, 'Failed to load user data'), (getRandomIntInclusive(1, 3))*1000);
    }
    else{

        setTimeout(callback(obj), (getRandomIntInclusive(1, 3))*1000);
    }
}

//requestUserData('userId777', func);

export {requestUserData}