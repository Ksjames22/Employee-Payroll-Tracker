// Function to collect employee data
const collectEmployees = function() {
  const employeeArray = [];
  let continueAdding = true;

  while (continueAdding) {
    const firstName = prompt("Enter the first name of the employee:");
    const lastName = prompt("Enter the last name of the employee:");
    let salary = prompt("Enter the salary of the employee:");

    // Convert salary to a number and check if it's NaN
    salary = isNaN(parseFloat(salary)) ? 0 : parseFloat(salary);

    // Add employee object to the array
    employeeArray.push({ firstName, lastName, salary });

    // Prompt to continue or cancel
    const input = prompt("Do you want to add another employee? (Yes/No)");
    if (input.toLowerCase() !== "yes") {
      continueAdding = false;
    }
  }
  return employeeArray;
}

// Function to display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;

  // Calculate total salary
  for (const employee of employeesArray) {
    totalSalary += employee.salary;
  }

  // Calculate average salary
  const averageSalary = totalSalary / employeesArray.length;

  // Display average salary in console
  console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
}

// Function to get a random employee
const getRandomEmployee = function(employeesArray) {
  // Generate a random index within the length of the employees array
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  // Display random employee in console
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Function to display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  const employeeTable = document.querySelector('#employee-table');
  employeeTable.innerHTML = '';

  for (const employee of employeesArray) {
    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = employee.firstName;
    newTableRow.appendChild(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = employee.lastName;
    newTableRow.appendChild(lastNameCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = `$${employee.salary.toFixed(2)}`;
    newTableRow.appendChild(salaryCell);

    employeeTable.appendChild(newTableRow);
  }
}

// Function to track employee data
const trackEmployeeData = function() {
  const employees = collectEmployees();
  displayEmployees(employees);
  displayAverageSalary(employees);
  getRandomEmployee(employees);
}

// Add event listener to 'Add Employees' button
const addEmployeesBtn = document.querySelector('#add-employees-btn');
addEmployeesBtn.addEventListener('click', trackEmployeeData);
