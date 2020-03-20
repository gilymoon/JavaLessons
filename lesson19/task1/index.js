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
        console.log(`${name} lifting anchor up`)
    },
    stopMachine(){
        console.log(`${name} lifting anchor down`)
    }
    
}

Object.setPrototypeOf(ship, vehicle);