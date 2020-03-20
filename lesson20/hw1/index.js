class Order {
    id = `${Math.random()}`;
    constructor (price, city, type){
        this.price = price;
        this.city = city;
        this.type = type;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = null;
    }
    checkPrice(){
        if(this.price > 1000) return true;
        else return false;
    }
    confirmOrder(){
        if(!this.isConfirmed) this.isConfirmed = true;
        this.dateConfirmed = new Date();
    }
    isValidType(){
        if(this.type === 'Buy' || this.type === 'Sell') return true;
        else return false;
    }
}

export {Order}