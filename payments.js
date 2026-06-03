// Load Balance from Local Storage

let balance =
Number(localStorage.getItem("balance")) || 10000;

let transactions =
JSON.parse(localStorage.getItem("transactions")) || [];

// Elements

const balanceText =
document.getElementById("balance");

const amountInput =
document.getElementById("amount");

const table =
document.getElementById("transactionTable");

// Show Current Balance

balanceText.innerHTML = "$" + balance;

// Save Transactions

function saveTransactions() {
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}

// Add Transaction

function addTransaction(type, amount) {

    const transaction = {
        date: new Date().toLocaleDateString(),
        type: type,
        amount: amount
    };

    transactions.push(transaction);

    saveTransactions();

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${transaction.date}</td>
        <td>${transaction.type}</td>
        <td>$${transaction.amount}</td>
        <td>Success</td>
    `;

    table.prepend(row);
}

// Load Previous Transactions

transactions.forEach(transaction => {

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${transaction.date}</td>
        <td>${transaction.type}</td>
        <td>$${transaction.amount}</td>
        <td>Success</td>
    `;

    table.appendChild(row);

});

// Deposit

document.getElementById("depositBtn")
.addEventListener("click", () => {

    let amount = Number(amountInput.value);

    if(amount <= 0){
        alert("Enter valid amount");
        return;
    }

    balance += amount;

    balanceText.innerHTML = "$" + balance;

    localStorage.setItem(
        "balance",
        balance
    );

    addTransaction(
        "Deposit",
        amount
    );

    amountInput.value = "";

});

// Withdraw

document.getElementById("withdrawBtn")
.addEventListener("click", () => {

    let amount = Number(amountInput.value);

    if(amount <= 0){
        alert("Enter valid amount");
        return;
    }

    if(amount > balance){
        alert("Insufficient Balance");
        return;
    }

    balance -= amount;

    balanceText.innerHTML = "$" + balance;

    localStorage.setItem(
        "balance",
        balance
    );

    addTransaction(
        "Withdraw",
        amount
    );

    amountInput.value = "";

});

// Transfer

document.getElementById("transferBtn")
.addEventListener("click", () => {

    let amount = Number(amountInput.value);

    if(amount <= 0){
        alert("Enter valid amount");
        return;
    }

    if(amount > balance){
        alert("Insufficient Balance");
        return;
    }

    balance -= amount;

    balanceText.innerHTML = "$" + balance;

    localStorage.setItem(
        "balance",
        balance
    );

    addTransaction(
        "Transfer",
        amount
    );

    amountInput.value = "";

});