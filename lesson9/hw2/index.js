function getPeople(obj){
    return Object.values(obj).flat().map(el => el.name);
}