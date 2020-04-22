export const parseUser = jsonStr =>{
    JSON.parse(jsonStr)
    .then(response => response.json())
    .catch(err => null);
}