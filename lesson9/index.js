function getAdults(obj){
    const usersArray = Object.entries(obj);

    const filteredUsersArray = usersArray
        .filter(user => user[1] >= 18);

    const usersNames = filteredUsersArray
        .map(user => user[0]);

        return usersNames;
}