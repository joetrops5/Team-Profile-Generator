import inquirer from "inquirer";

const start = async () => {
  // Manager
  await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your manager's name?",
    },
    {
      type: "input",
      name: "employeeId",
      message: "What is your employee ID?",
    },
    {
      type: "input",
      name: "emailAdress",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your office number?",
    },
  ]);

  // Menu
  await inquirer.prompt([
    {
      type: "list",
      name: "menuOptions",
      message: "What do you want to do next?",
      choices: ["Add engineer", "Add intern", "Finish"],
    },
  ]);
};

start();
