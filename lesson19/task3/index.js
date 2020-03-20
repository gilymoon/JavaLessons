const user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        [firstN, lastN] = value.split(' ');
        this.firstName = firstN;
        this.lastName = lastN;

    }
}

export {user}