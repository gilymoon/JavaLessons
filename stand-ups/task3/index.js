function getUsersList(){
    return fetch(baseUrl)
    .then(response => response.json());
}

getUsersList()
.then(data => {
    console.log(data);
});

