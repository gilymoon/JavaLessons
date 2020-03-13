const user = {
    firstName: 'John', 
    lastName: 'Doe',
    getFullName(){
        return (`${this.firstName} ${this.lastName}`);
    },
    setFullName(fullName){
        let fName = fullName.split(" ");
        this.firstName = fName[0];
        this.lastName = fName[1];
        
    }
}

export {user};