// Take Input value from user and save it to input variable
const incomeInput = document.querySelector('input[name="income"]');
const input = incomeInput.value;

// Take expense value of rent from user and save it to rent variable
const rentExpense = document.querySelector('input[name"rent"]');
const rent = rentExpense.value;

// Take expense value of food from user and save it to food variable
const foodExpense = document.querySelector('input[name"Food"]');
const food = foodExpense.value;

// Take expense value of Transportation from user and save it to transport variable
const TransportExpense = document.querySelector('input[name"Transport"]');
const transport = TransportExpense.value;

// Take expense value of utility from user and save it to utility variable
const utilityExpense = document.querySelector('input[name"Utility"]');
const utility = utilityExpense.value;

// A function to add a form for other expenses
function createFormElement(name, value) {
    const formElement = document.createElement('input');

    formElement.name = name;
    formElement.value = value;

    document.body.appendChild(formElement);
    return formElement;
}

// Total expense

const Totalexpense = rent + food + transport + utility + formElement.value