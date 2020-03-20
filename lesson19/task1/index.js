const vehicle = {
    name: 'Argo',
    move(){
        console.log(`${this.name} is moving`);
    },
    stop(){
        console.log(`${name} stopped`)
    }
}

const ship = {
    startMachine(){
        console.log(`${name} lifting anchor up`);
        ship.move();
    },
    stopMachine(){
        ship.stop();
        console.log(`${name} lifting anchor down`);
        
    },
    __proto__:vehicle
}


export {vehicle, ship}