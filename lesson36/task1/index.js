const baseUrl = 'https://api.github.com/users'

export const fetchUser = (id) =>{
    return fetch(`${baseUrl}/${id}`)
    .then(response => response.json())
    .catch(err => {
        if(err.status === 404){
            return null;
        }
        else{
            
        }
    })
}