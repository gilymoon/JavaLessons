function sortContacts(contacts, isAsc) {
    if(!Array.isArray(contacts)) return null;
    const result = [];
    if(isAsc){

       result = contacts
        .sort((a, b)=> {
            return a.name.localeCompare(b.name);
        });
        return result;
    }
    else{
        result = contacts
        .sort((a, b)=> {
            return b.name.localeCompare(a.name);
        });
        return result;
    }
}