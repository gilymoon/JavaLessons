const baseUrl = 'https://5e97372677f54300163394d5.mockapi.io/api/v1/USERS';

/* getUsersList code here */

const getUsersList = () =>{
    return fetch(baseUrl, {
        method: "GET",

    })
}

/* getUserById code here */

const getUserById = id =>{
    return fetch(`${baseUrl}${id}`, {
        method: "GET"
    })
}

/* createUser code here */

const createUser = (newUser) =>{
    return fetch(baseUrl, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newUser)
    })
}

/* updateUser code here */

const updateUser = (updatedUser) =>{
    return fetch(`${baseUrl}${id}`, {
        method: "PUT",
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updatedUser)
    })
}

/* deleteUser code here */

const deleteUser = () =>{
    return fetch(`${baseUrl}${id}`, {
        method: "DELETE"
    })
}