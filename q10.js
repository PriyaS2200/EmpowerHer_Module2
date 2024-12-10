// Question 1: Closure-Based Counter Implementation
//let count = 0;
function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log(count)
        },
        decrement: function () {
            count--;
            console.log(count)
        }
    }
}

const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1

// Question 2: Simulating Private Variables with Closures
function createBankAccount() {
    let accountDetails = {
        name: "Shyam",
        balance: 0
    };
    return {
        deposit: function (amt) {
            accountDetails.balance = accountDetails.balance + amt;
            console.log(`Deposited: ${amt}`)
        },
        withdraw: function (x) {
            if (x <= accountDetails.balance) {
                console.log(`Withdrawn: ${x}`)
            }
            else {
                console.log(`Insufficient balance`)
            }
            accountDetails.balance = accountDetails.balance - x;
        }
    }
}

const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance
console.log(account.balance); // Output: undefined

