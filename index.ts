import inquirer from "inquirer";

// Printing A Wellcome Messege
console.log("\n\Wellcome To \ `Ahmed_Raza\` - CLI Simple Calculator\n");

//Asking question from users through inquirer

let answers= await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// Conditional statement If/Else

if (answers.operator === "Addition") {
  console.log(answers.firstNumber + answers.secondNumber);
} else if (answers.operator === "Subtraction") {
  console.log(answers.firstNumber - answers.secondNumber);
} else if (answers.operator === "Multiplication") {
  console.log(answers.firstNumber * answers.secondNumber);
} else if (answers.operator === "Division") {
  console.log(answers.firstNumber / answers.secondNumber);
}
