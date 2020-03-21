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
        return this._name;
    }
    get sessionId(){
        return this._sessionId;
    }

}

class UserRepository {
    constructor(users){
        this._users = users[User];
    }

    get users(){
        return this._users;
    }

    getUserNames(){
        return this._users.map(el => el.name);
    }
    getUserIds(){
        console.log(this._users.map(el => el.id))
        return this._users.map(el => el.id);
    }
    getUserNameById(id){
        return this._users.map(el => {
            if(el.id === id) return el.name;
        })
    }

}

const user1 = User(15, 'bob', 16);
const user2 = User(1, 'bb', 6);


export {User, UserRepository}