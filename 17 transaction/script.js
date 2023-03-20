let bank = [
    { account: "account1", balance: 100 },
    { account: "account2", balance: 150 },
    { account: "account3", balance: 30 }
  ];
  let addDeposit = 100;
  let item = 1; // index of account to use
  
  function deposit() {
    bank[item].balance += addDeposit;
    return bank[item].balance;
  }
  
  function withdrawal() {
    bank[item].balance -= addDeposit;
    return bank[item].balance;
  }
  
  console.log(withdrawal()); // Outputs the new balance after withdrawal
  console.log(deposit()); // Outputs the new balance after deposit
  