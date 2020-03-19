function saveCalls (func) {
    function arg() {
        arg.call.push([...arguments])
        return func.call(this, arguments)
    }
    arg.apply = [];
    return arg;
}

export { saveCalls };