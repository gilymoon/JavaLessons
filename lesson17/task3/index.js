function defer(func, ms){
    return function(){
        setTimeout(() => func.apply(this, arguments), ms);
    }
}

const user = {
    name: 'Tom',
    sayHi(){
        console.log(`Hi, I'm ${this.name}!`)
    }
}

export {defer};