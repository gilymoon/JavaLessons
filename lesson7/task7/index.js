function withdraw(clients, balances, client, amount){
    let clientPos = clients.findIndex(client);
    if(balances[clientPos] > amount){

    }
    return balances[clientPos] > amount ? balances[clientPos] -= amount : -1; 
}