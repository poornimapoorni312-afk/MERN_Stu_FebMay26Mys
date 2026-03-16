const wallet = {
    owner: "Poornima",
    balance: 500,
    lastTransaction: null,
  
    deposit: function(amount) {
      if (typeof amount !== "number" || amount <= 0) {
        console.log("Invalid amount");
        return;
      }
  
      this.balance += amount;
  
      this.lastTransaction = {
        type: "DEPOSIT",
        amount: amount,
        balanceAfter: this.balance
      };
    },
  
    withdraw: function(amount) {
      if (typeof amount !== "number" || amount <= 0) {
        console.log("Invalid amount");
        return;
      }
  
      if (amount > this.balance) {
        console.log("Insufficient balance");
        return;
      }
  
      this.balance -= amount;
  
      this.lastTransaction = {
        type: "WITHDRAW",
        amount: amount,
        balanceAfter: this.balance
      };
    }
  };
  
  
  // Example
  wallet.deposit(200);
  wallet.withdraw(100);
  
  console.log(wallet);