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
        console.log(`${name} lifting anchor down`);
        ship.stop();
    },
    __proto__:vehicle
}


export {vehicle, ship}