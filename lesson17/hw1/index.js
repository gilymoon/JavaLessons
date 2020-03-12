const user = {
    firstName: 'John', 
    lastName: 'Doe',
    getFullName(){
        return (`${this.firstName} ${this.lastName}`);
    },
    setFullName(fullName){
        let fName = fullName.split(" ");
        this.name = fName[0];
        this.sName = fName[1];
        
    }
}

export {user};