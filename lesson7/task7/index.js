function withdraw(clients, balances, client, amount){
    let clientPos = clients.findIndex(client);
    balances[clientPos] > amount ? balances[clientPos] -= amount : -1; 
}
