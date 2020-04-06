function delay(delay, callback, context, ...args){
    setTimeout(callback(context, ...args), delay);
}

export {delay};