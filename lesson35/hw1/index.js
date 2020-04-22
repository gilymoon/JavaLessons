export const parseUser = jsonStr =>{
    try{
       return JSON.parse(jsonStr)
    }
    catch{
        return null;
    }
}