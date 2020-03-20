class User {
    constructor(id, name, sessionId){
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
    get id(){
        return this._id;
    }
    get name(){
        return this.name;
    }
    get sessionId(){
        return this._sessionId;
    }

}

class UserRepository {
    constructor(arr){
        this._users = Object.freeze(arr[User]);
    }

    get users(){
        return this._users;
    }

    getUserNames(){
        return this._users.map(el => el.name);
    }
    getUserIds(){
        return this._users.map(el => el.id);
    }
    getUserNameById(id){
        return this._users.map(el => {
            if(el.id === id) return el.name;
        })
    }

}

export {User, UserRepository}