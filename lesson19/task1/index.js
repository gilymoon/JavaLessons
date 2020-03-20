const vehicle = {
    name: 'Argo',
    move(){
        console.log(`${this.name} is moving`);
    },
    stop(){
        console.log(`${this.name} stopped`)
    }
}

const ship = {
    startMachine(){
        console.log(`${this.name} lifting anchor up`);
        ship.move();
    },
    stopMachine(){
        ship.stop();
        ship.log(`${this.name} lifting anchor down`);
        
    },
    __proto__: vehicle
}


export {vehicle, ship}