const accountData = {
  accountNumber: "123456",
  password: "password",
  type: "savings",
  name: "Harish Mamidala",
  balance: 10000,
  pin: "1234",
  transactions: ["No Transaction Found"]
};

function credential() {

  alert("Please make a note of Account Number and Password");
  alert("Account Number - 123456");
  alert("Password - password");
}
credential();

function login() {
  const accountNumber = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (accountNumber === accountData.accountNumber && password === accountData.password) {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("menu-screen").classList.remove("hidden");
    document.getElementById("greeting").innerText = `Welcome, ${accountData.name}`;
  } else {
    document.getElementById("login-error").innerHTML = "Invalid account number or password";
  }
}

function hideScreens() {
  const screens = document.querySelectorAll("#screen > div");
  screens.forEach((screen) => screen.classList.add("hidden"));
}

function goMenu() {
  document.getElementById("deposit-amount").value = "";
  document.getElementById("withdraw-amount").value = "";
  document.getElementById("transfer-account").value = "";
  document.getElementById("transfer-amount").value = "";
  document.getElementById("old-pin").value = "";
  document.getElementById("new-pin").value = ""; 
  document.getElementById("transaction").innerHTML = "";
  document.getElementById("change-pin-error").innerText = "";
  hideScreens();
  document.getElementById("menu-screen").classList.remove("hidden");
}

function handleWithdrawal() {
  hideScreens();
  document.getElementById("withdrawal-screen").classList.remove("hidden");
}

function handleDeposit() {
  hideScreens();
  document.getElementById("deposit-screen").classList.remove("hidden");
}

function handleBalanceEnquiry() {
  hideScreens();
  document.getElementById("balance-screen").classList.remove("hidden");
  document.getElementById("balance-amount").innerHTML = `Current Balance: $${accountData.balance}`;
}

function handleAccountDetails() {
  hideScreens();
  document.getElementById("account-details-screen").classList.remove("hidden");
  document.getElementById("account-details").innerHTML = `
    Name: ${accountData.name}<br>
    Account Type: ${accountData.type}<br>
    Account Number: ${accountData.accountNumber}
  `;
}

function handleChangePin() {
  hideScreens();
  document.getElementById("change-pin-screen").classList.remove("hidden");
}

function handleMiniStatement() {
  hideScreens();
  document.getElementById("mini-statement-screen").classList.remove("hidden");
  let statement = accountData.transactions.map(transaction => {
    return `<p>${transaction}</p>`;
  }).join("");
  document.getElementById("mini-statement").innerHTML = statement;
}

function handleTransferFunds() {
  hideScreens();
  document.getElementById("transfer-funds-screen").classList.remove("hidden");
}

function handleOther() {
  hideScreens();
  document.getElementById("others-screen").classList.remove("hidden");
} 

function withdraw() {
  const amount = parseFloat(document.getElementById("withdraw-amount").value);

  if (amount > 0 && amount <= (accountData.balance - 1000)) {
    accountData.balance -= amount;
    if (accountData.transactions[0] === "No Transaction Found") {
      accountData.transactions.shift();
    }
    accountData.transactions.push(`Withdrawn: $${amount}`);
    document.getElementById("transaction").innerHTML = "";
    document.getElementById("withdrawal-error").innerText = "";
    showTransactionSuccess(`Withdrawn: $${amount}`);
  } else {
    document.getElementById("withdrawal-error").innerHTML = "Invalid amount or insufficient funds";
  }
}

function deposit() {
  const amount = parseFloat(document.getElementById("deposit-amount").value);
  if (amount > 0) {
    accountData.balance += amount;
    if (accountData.transactions[0] === "No Transaction Found") {
      accountData.transactions.shift();
    }
    accountData.transactions.push(`Deposited: $${amount}`);
    document.getElementById("transaction").innerHTML = "";
    document.getElementById("deposit-error").innerText = "";
    showTransactionSuccess(`Deposited: $${amount}`);
  } else {
    document.getElementById("deposit-error").innerHTML = "Invalid amount";
  }
}

function changePin() {
  const oldPin = document.getElementById("old-pin").value;
  const newPin = document.getElementById("new-pin").value;

  if (oldPin === accountData.pin && newPin.length === 4) {
    accountData.pin = newPin;
    handleTransactionSuccess();
  } else {
    document.getElementById("change-pin-error").innerText = "Invalid PIN or new PIN must be 4 digits";
  }
}

function transferFunds() {
  const transferAccount = document.getElementById("transfer-account").value;
  const amount = parseFloat(document.getElementById("transfer-amount").value);

  if (!/^\d{6}$/.test(transferAccount)) {
    alert("Enter a valid 6-digit account number");
    return;
  }

  if (amount > 0 && amount <= (accountData.balance - 1000)) {
    accountData.balance -= amount;
    if (accountData.transactions[0] === "No Transaction Found") {
      accountData.transactions.shift();
    }
    accountData.transactions.push(`Transferred: $${amount} to Account ${transferAccount}`);
    document.getElementById("transaction").innerHTML = "";
    document.getElementById("transfer-error").innerText = "";
    showTransactionSuccess(`Transferred: $${amount} to Account ${transferAccount}`);
  } else {
    document.getElementById("transfer-error").innerHTML = "Invalid amount or insufficient funds";
  }
}

function handleTransactionSuccess() {
  hideScreens();
  document.getElementById("transaction-successful-page").classList.remove("hidden");
  document.getElementById("transaction-successful-page-data").innerHTML = "PIN changed successfully";
}

function showTransactionSuccess(message) {
  hideScreens();
  document.getElementById("transaction-successful-page").classList.remove("hidden");
  document.getElementById("transaction-successful-page-data").innerHTML = message;
}

// const accountData = {
//   accountNumber: "123456",
//   password: "password",
//   type: "savings",
//   name: "Harish Mamidala",
//   balance: 10000,
//   pin: "1234",
//   transactions: ["No Transaction Found"]
// };

// function login() {
//   const accountNumber = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   // if (accountNumber === accountData.accountNumber && password === accountData.password) {
//     document.getElementById("login-screen").classList.add("hidden");
//     document.getElementById("menu-screen").classList.remove("hidden");
//     document.getElementById("greeting").innerText = `Welcome, ${accountData.name}`;
//   // } else {
//   //   document.getElementById("login-error").innerHTML = "Invalid account number or password";
//   // }
// }

// function hideScreens() {
//   const screens = document.querySelectorAll("#screen > div");
//   screens.forEach((screen) => screen.classList.add("hidden"));
// }

// function goMenu() {
//   document.getElementById("deposit-amount").value = "";
//   document.getElementById("withdraw-amount").value = "";
//   document.getElementById("transfer-account").value = "";
//   document.getElementById("transfer-amount").value = "";
//   document.getElementById("old-pin").value = "";
//   document.getElementById("new-pin").value = ""; 
//   document.getElementById("transaction").innerHTML = "";
//   document.getElementById("change-pin-error").innerText = "";
//   hideScreens();
//   document.getElementById("menu-screen").classList.remove("hidden");
// }

// function handleWithdrawal() {
//   hideScreens();
//   document.getElementById("withdrawal-screen").classList.remove("hidden");
// }

// function handleDeposit() {
//   hideScreens();
//   document.getElementById("deposit-screen").classList.remove("hidden");
// }

// function handleBalanceEnquiry() {
//   hideScreens();
//   document.getElementById("balance-screen").classList.remove("hidden");
//   document.getElementById("balance-amount").innerHTML = `Current Balance: $${accountData.balance}`;
// }

// function handleAccountDetails() {
//   hideScreens();
//   document.getElementById("account-details-screen").classList.remove("hidden");
//   document.getElementById("account-details").innerHTML = `
//     Name: ${accountData.name}<br>
//     Account Type: ${accountData.type}<br>
//     Account Number: ${accountData.accountNumber}
//   `;
// }

// function handleChangePin() {
//   hideScreens();
//   document.getElementById("change-pin-screen").classList.remove("hidden");
// }

// function handleMiniStatement() {
//   hideScreens();
//   document.getElementById("mini-statement-screen").classList.remove("hidden");
//   let statement = accountData.transactions.map(transaction => {
//     return `<p>${transaction}</p>`;
//   }).join("");
//   document.getElementById("mini-statement").innerHTML = statement;
// }

// function handleTransferFunds() {
//   hideScreens();
//   document.getElementById("transfer-funds-screen").classList.remove("hidden");
// }

// function handleOther() {
//   hideScreens();
//   document.getElementById("others-screen").classList.remove("hidden");
// }

// function withdraw() {
//   const amount = parseFloat(document.getElementById("withdraw-amount").value);

//   if (amount > 0 && amount <= (accountData.balance - 1000)) {
//     accountData.balance -= amount;
//     if (accountData.transactions[0] === "No Transaction Found") {
//       accountData.transactions.shift();
//     }
//     accountData.transactions.push(`Withdrawn: $${amount}`);
//     document.getElementById("transaction").innerHTML = "";
//     document.getElementById("withdrawal-error").innerText = "";
//     showTransactionSuccess(`Withdrawn: $${amount}`);
//   } else {
//     document.getElementById("withdrawal-error").innerHTML = "Invalid amount or insufficient funds";
//   }
// }

// function deposit() {
//   const amount = parseFloat(document.getElementById("deposit-amount").value);
//   if (amount > 0) {
//     accountData.balance += amount;
//     if (accountData.transactions[0] === "No Transaction Found") {
//       accountData.transactions.shift();
//     }
//     accountData.transactions.push(`Deposited: $${amount}`);
//     document.getElementById("transaction").innerHTML = "";
//     document.getElementById("deposit-error").innerText = "";
//     showTransactionSuccess(`Deposited: $${amount}`);
//   } else {
//     document.getElementById("deposit-error").innerHTML = "Invalid amount";
//   }
// }

// function changePin() {
//   const oldPin = document.getElementById("old-pin").value;
//   const newPin = document.getElementById("new-pin").value;

//   if (oldPin === accountData.pin && newPin.length === 4) {
//     accountData.pin = newPin;
//     handleTransactionSuccess();
//   } else {
//     document.getElementById("change-pin-error").innerText = "Invalid PIN or new PIN must be 4 digits";
//   }
// }

// function transferFunds() {
//   const transferAccount = document.getElementById("transfer-account").value;
//   const amount = parseFloat(document.getElementById("transfer-amount").value);

//   if (!/^\d{6}$/.test(transferAccount)) {
//     alert("Enter a valid 6-digit account number");
//     return;
//   }

//   if (amount > 0 && amount <= (accountData.balance - 1000)) {
//     accountData.balance -= amount;
//     if (accountData.transactions[0] === "No Transaction Found") {
//       accountData.transactions.shift();
//     }
//     accountData.transactions.push(`Transferred: $${amount} to Account ${transferAccount}`);
//     document.getElementById("transaction").innerHTML = "";
//     document.getElementById("transfer-error").innerText = "";
//     showTransactionSuccess(`Transferred: $${amount} to Account ${transferAccount}`);
//   } else {
//     document.getElementById("transfer-error").innerHTML = "Invalid amount or insufficient funds";
//   }
// }

// function handleTransactionSuccess() {
//   hideScreens();
//   document.getElementById("transaction-successful-page").classList.remove("hidden");
//   document.getElementById("transaction-successful-page-data").innerHTML = "PIN changed successfully";
// }

// function showTransactionSuccess(message) {
//   hideScreens();
//   document.getElementById("transaction-successful-page").classList.remove("hidden");
//   document.getElementById("transaction-successful-page-data").innerHTML = message;
// }


// const accountData = {
//   accountNumber: "123456",
//   password: "password",
//   type: "savings",
//   name: "Harish Mamidala",
//   balance: 10000,
//   pin: "1234",
//   transactions: ["No Transaction Found"]
// };

// function login() {
//   const accountNumber = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   // if (accountNumber === accountData.accountNumber && password === accountData.password) {
//     document.getElementById("login-screen").classList.add("hidden");
//     document.getElementById("menu-screen").classList.remove("hidden");
//     document.getElementById("greeting").innerText = `Welcome, ${accountData.name}`;
//   // } else {
//   //   document.getElementById("login-error").innerHTML = "Invalid account number or password";
//   // }
// }

// function hideScreens() {
//   const screens = document.querySelectorAll("#screen > div");
//   screens.forEach((screen) => screen.classList.add("hidden"));
// }

// function goMenu() {
//   document.getElementById("deposit-amount").value = "";
//   document.getElementById("withdraw-amount").value = "";
//   document.getElementById("transfer-account").value = "";
//   document.getElementById("transfer-amount").value = "";
//   document.getElementById("old-pin").value = "";
//   document.getElementById("new-pin").value = ""; 
//   document.getElementById("transaction").innerHTML = "";
//   document.getElementById("change-pin-error").innerText = "";
//   hideScreens();
//   document.getElementById("menu-screen").classList.remove("hidden");
// }

// function handleWithdrawal() {
//   hideScreens();
//   document.getElementById("withdrawal-screen").classList.remove("hidden");
// }

// function handleDeposit() {
//   hideScreens();
//   document.getElementById("deposit-screen").classList.remove("hidden");
// }

// function handleBalanceEnquiry() {
//   hideScreens();
//   document.getElementById("balance-screen").classList.remove("hidden");
//   document.getElementById("balance-amount").innerHTML = `Current Balance: $${accountData.balance}`;
// }

// function handleAccountDetails() {
//   hideScreens();
//   document.getElementById("account-details-screen").classList.remove("hidden");
//   document.getElementById("account-details").innerHTML = `
//     Name: ${accountData.name}<br>
//     Account Type: ${accountData.type}<br>
//     Account Number: ${accountData.accountNumber}
//   `;
// }

// function handleChangePin() {
//   hideScreens();
//   document.getElementById("change-pin-screen").classList.remove("hidden");
// }

// function handleMiniStatement() {
//   hideScreens();
//   document.getElementById("mini-statement-screen").classList.remove("hidden");
//   let statement = accountData.transactions.map(transaction => {
//     return `<p>${transaction}</p>`;
//   }).join("");
//   document.getElementById("mini-statement").innerHTML = statement;
// }

// function handleTransferFunds() {
//   hideScreens();
//   document.getElementById("transfer-funds-screen").classList.remove("hidden");
// }

// function handleOther() {
//   hideScreens();
//   document.getElementById("others-screen").classList.remove("hidden");
// }

// function withdraw() {
//   const amount = parseFloat(document.getElementById("withdraw-amount").value);

//   if (amount > 0 && amount <= (accountData.balance - 1000 )) {
//     accountData.balance -= amount;
//     if (accountData.transactions[0] === "No Transaction Found") {
//       accountData.transactions.shift();
//     }
//     accountData.transactions.push(`Withdrawn: $${amount}`);
//     document.getElementById("transaction").innerHTML = "Transaction Successful...";
//     document.getElementById("withdrawal-error").innerText = "";
//     handleBalanceEnquiry();
//   } else {
//     document.getElementById("withdrawal-error").innerHTML = "Invalid amount or insufficient funds";
//   }
// }

// function deposit() {
//   const amount = parseFloat(document.getElementById("deposit-amount").value);
//   if (amount > 0) {
//     accountData.balance += amount;
//     if (accountData.transactions[0] === "No Transaction Found") {
//       accountData.transactions.shift();
//     }
//     accountData.transactions.push(`Deposited: $${amount}`);
//     document.getElementById("transaction").innerHTML = "Transaction Successful...";
//     document.getElementById("deposit-error").innerText = "";
//     handleBalanceEnquiry();
//   } else {
//     document.getElementById("deposit-error").innerHTML = "Invalid amount";
//   }
// }

// function changePin() {
//   const oldPin = document.getElementById("old-pin").value;
//   const newPin = document.getElementById("new-pin").value;

//   if (oldPin === accountData.pin && newPin.length === 4) {
//     accountData.pin = newPin;
//     // document.getElementById("change-pin-error").innerText = "PIN changed successfully";
//     handleTransactionSuccess();
//   } else {
//     document.getElementById("change-pin-error").innerText = "Invalid PIN or new PIN must be 4 digits";
//   }
// }

// function transferFunds() {
//   const transferAccount = document.getElementById("transfer-account").value;
//   const amount = parseFloat(document.getElementById("transfer-amount").value);

//   if (!/^\d{6}$/.test(transferAccount)) {
//     // document.getElementById("transfer-error").innerText = "Enter a valid 6-digit account number";
//     alert("Enter a valid 6-digit account number");
//     return;
//   }

//   if (amount > 0 && amount <= (accountData.balance - 1000)) {
//     accountData.balance -= amount;
//     if (accountData.transactions[0] === "No Transaction Found") {
//       accountData.transactions.shift();
//     }
//     accountData.transactions.push(`Transferred: $${amount} to Account ${transferAccount}`);
//     document.getElementById("transaction").innerHTML = "Transfer Successful...";
//     document.getElementById("transfer-error").innerText = "";
//     handleBalanceEnquiry();
//   } else {
//     document.getElementById("transfer-error").innerHTML = "Invalid amount or insufficient funds";
//   }
// }

// function handleTransactionSuccess() {
//   hideScreens();
//   document.getElementById("transaction-successful-page").classList.remove("hidden");
//   document.getElementById("transaction-successful-page-data").innerHTML = "PIN changed successfully";
// }


// const accountData = {
//     accountNumber: '123456',
//     password: 'password',
//     name: 'John Doe',
//     balance: 1000,
// };

// function login() {
//     const accountNumber = document.getElementById('account-number').value;
//     const password = document.getElementById('password').value;

//     if (accountNumber === accountData.accountNumber && password === accountData.password) {
//         document.getElementById('login-screen').style.display = 'none';
//         document.getElementById('main-screen').style.display = 'block';
//         document.getElementById('greeting').innerText = `Welcome, ${accountData.name}`;
//     } else {
//         alert('Invalid account number or password');
//     }
// }

// function showTransactionResult(message, amount, previousBalance, isDeposit = false) {
//     document.getElementById('main-screen').style.display = 'none';
//     document.getElementById('action-screen').style.display = 'none';
//     document.getElementById('transaction-result').style.display = 'block';

//     document.getElementById('transaction-message').innerHTML = `
//         ${message}<br>
//         Previous Balance: $${previousBalance.toFixed(2)}<br>
//         ${isDeposit ? 'Deposited' : 'Withdrawn'} Amount: $${amount.toFixed(2)}<br>
//         Current Balance: $${accountData.balance.toFixed(2)}
//     `;
// }

// function showWithdraw() {
//     hideAll();
//     document.getElementById('withdrawal').style.display = 'block';
//     document.getElementById('action-screen').style.display = 'block';
// }

// function showDeposit() {
//     hideAll();
//     document.getElementById('deposit').style.display = 'block';
//     document.getElementById('action-screen').style.display = 'block';
// }

// function showBalance() {
//     hideAll();
//     document.getElementById('balance-enquiry').style.display = 'block';
//     document.getElementById('balance').innerText = `Your current balance is $${accountData.balance.toFixed(2)}`;
//     document.getElementById('action-screen').style.display = 'block';
// }

// function showAccountDetails() {
//     hideAll();
//     document.getElementById('account-details').style.display = 'block';
//     document.getElementById('account-name').innerText = accountData.name;
//     document.getElementById('account-no').innerText = accountData.accountNumber;
//     document.getElementById('action-screen').style.display = 'block';
// }

// function showChangePin() {
//     hideAll();
//     document.getElementById('change-pin').style.display = 'block';
//     document.getElementById('action-screen').style.display = 'block';
// }

// function showOthers() {
//     hideAll();
//     document.getElementById('others').style.display = 'block';
//     document.getElementById('action-screen').style.display = 'block';
// }

// function withdraw() {
//     const amount = parseFloat(document.getElementById('withdraw-amount').value);
//     const previousBalance = accountData.balance;
//     if (amount > 0 && amount <= accountData.balance) {
//         accountData.balance -= amount;
//         showTransactionResult(`You have successfully withdrawn $${amount.toFixed(2)}.`, amount, previousBalance);
//     } else {
//         alert('Invalid amount or insufficient balance');
//     }
// }

// function deposit() {
//     const amount = parseFloat(document.getElementById('deposit-amount').value);
//     const previousBalance = accountData.balance;
//     if (amount > 0) {
//         accountData.balance += amount;
//         showTransactionResult(`You have successfully deposited $${amount.toFixed(2)}.`, amount, previousBalance, true);
//     } else {
//         alert('Invalid amount');
//     }
// }

// function changePin() {
//     const newPin = document.getElementById('new-pin').value;
//     if (newPin) {
//         accountData.password = newPin;
//         alert('Pin changed successfully');
//         goBack();
//     } else {
//         alert('Invalid pin');
//     }
// }

// function hideAll() {
//     document.querySelectorAll('#action-screen > div').forEach(div => div.style.display = 'none');
// }

// function goBack() {
//     document.getElementById('action-screen').style.display = 'none';
//     document.getElementById('main-screen').style.display = 'block';
// }

// function goBackToMain() {
//     document.getElementById('transaction-result').style.display = 'none';
//     document.getElementById('main-screen').style.display = 'block';
// }
