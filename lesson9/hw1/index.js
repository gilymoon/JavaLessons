function getCustomersList(obj) {
    let copy = Object.entries(obj);
    return copy.map(el => ({ id: el[0], ...obj[el[0]] }))
        .sort((prev, cur) => prev.age - cur.age)
}