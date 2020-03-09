function sortContacts(contacts, isAsc) {
    if(contacts ==!Array.isArray()) return null;
    const result = [];
    if(isAsc){

       result = contacts
        .sort((a, b)=> {
            return a.localeCompare(b);
        });
        return result;
    }
    else{
        result = contacts
        .sort((a, b)=> {
            return b.localeCompare(a);
        });
        return result;
    }
}