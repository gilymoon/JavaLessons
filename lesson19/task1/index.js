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
    }
    
}

Object.setPrototypeOf(ship, vehicle);
export {vehicle};
export {ship}