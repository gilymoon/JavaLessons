function saveCalls (func) {
    function arg() {
        arg.calls.push([...arguments])
        return func.call(this, arguments)
    }
    arg.calls = [];
    return arg;
}

export { saveCalls };