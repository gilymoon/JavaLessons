function sortContacts(contacts, isAsc) {
    if(!Array.isArray(contacts)) return null;
    const result = contacts;
    if(isAsc){

       result
        .sort((a, b)=> {
            return a.name.localeCompare(b.name);
        });
        return result;
    }
    else{
        result
        .sort((a, b)=> {
            return b.name.localeCompare(a.name);
        });
        return result;
    }
}