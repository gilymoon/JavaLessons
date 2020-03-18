export const bind = (func, context, ...args) => {
    return function(...targetArgs) {
        return func.call(context, ...args, ...targetArgs);
    }
}

