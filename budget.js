// A function to add a form for other expenses
// Get form element
const form = document.getElementById('expenseform');
// Get button element
const button = document.getElementById('dropdown-button');
// Add event listener to the button
button.addEventListener('click', function(){
    // Ask user to input an expense he/she wants to add
    const labelName = prompt('Enter name of other expense: ');

    // create new input element
    const input = document.createElement('input');
    input.type = 'number';
    input.name = 'otherexpense';
    input.placeholder = 'Enter other expense';

    // Add a class to the output to style with css
    input.classList.add('new-form');

    // create new lebel element
    const label = document.createElement('label');
    label.htmlFor = 'Otherexpense';
    label.textContent = `${labelName} `;

    //create a new div element to wrap the label, input, and delete button elements
    const div = document.createElement('div');
    div.classList.add('form-group');
    div.appendChild(label);
    div.appendChild(input);

    //create a delete button element to remove added expense
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function(){
        div.remove();
    });

    //Append the lebel, input and delete button elements to the div
    div.appendChild(deleteButton);

    //Append the new div element to the form
    form.appendChild(div);
})

//Get the income and expense input fields
const incomeInput = document.querySelector('input[name="Income"]');
const rentInput = document.querySelector('input[name="Rent"]');
const foodInput = document.querySelector('input[name="Food"]');
const utilityInput = document.querySelector('input[name="Utility"]');
const TransportationInput = document.querySelector('input[name="Transportation"]');
const otherExpenseInputs = document.querySelectorAll('input[name="otherexpense"]');

//get the graph section element
const graphSection = document.querySelector('.graph-section');

//add an event listener to the form to calculate total income and expenses
form.addEventListener('submit', (event) => {
    event.preventDefault();
    //calculate total income
    const totalIncome = parseFloat(incomeInput.value);
    //calculate total expenses
    const rentExpense = parseFloat(rentInput.value);
    const foodExpense = parseFloat(foodInput.value);
    const utilityExpense = parseFloat(utilityInput.value);
    const transportationExpense = parseFloat(TransportationInput.value);
    let otherExpensesTotal = 0;
    otherExpenseInputs.forEach((input) => {
        if (input.value) {
            otherExpensesTotal += parseFloat(input.value);
        }
    });
    const totalExpenses = rentExpense + foodExpense + utilityExpense + transportationExpense + otherExpensesTotal;

    //display total income and expenses in the graph section
    graphSection.innerHTML = `
    <h2>Total Income: $${totalIncome.toFixed(2)}</h2>
    <h2>Total Expenses: $${totalExpenses.toFixed(2)}</h2>
    `;
})




