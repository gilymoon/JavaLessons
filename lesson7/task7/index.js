function withdraw(clients, balances, client, amount){
    let clientPos = clients.findIndex(client);
    return balances[clientPos] > amount ? balances[clientPos] -= amount : -1; 
}
