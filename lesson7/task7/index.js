function withdraw(clients, balances, client, amount){
    let clientPos = clients.findIndex(client);
   return balances.find(clientPos).map(el => {
        if(el < amount) return -1;
        else{
           return el -= amount;
        }
    })
}