const getLocalStorageData = () => {
    return Object.defineProperties(localStorage)
    .reduce((acc, [key, value]) => {
        return {
            ...acc, 
            [key]:JSON.parse(value),
        };
    }, {});
}

export {getLocalStorageData}