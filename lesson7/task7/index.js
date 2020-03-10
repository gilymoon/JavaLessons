function withdraw(clients, balances, client, amount){
    let clientPos = clients.findIndex(client);
    if(balances[clientPos] > amount){
        balances[clientPos] -= amount;
    }
    else{
        return -1;
    }
    
    return balances[clientPos];
}
