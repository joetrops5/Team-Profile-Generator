import inquirer from "inquirer";

const start = async () => {
  const team = {
    managers: [],
    engineers: [],
    interns: [],
  };

  // Manager
  const manager = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your manager's name?",
    },
    {
      type: "input",
      name: "employeeId",
      message: "What is your manager's employee ID?",
    },
    {
      type: "input",
      name: "emailAdress",
      message: "What is your manager's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your manager's office number?",
    },
  ]);

  team.managers.push(manager);

  // Menu
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "menuOption",
      message: "What do you want to do next?",
      choices: ["Add engineer", "Add intern", "Finish"],
    },
  ]);

  // NOTE: answers.menuOption is the user's choice

  if (answers.menuOption == "Add engineer") {
    // Engineer
    const engineer = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the engineer's employee ID?",
      },
      {
        type: "input",
        name: "emailAdress",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the engineer's office number?",
      },
    ]);

    team.engineers.push(engineer);
  }

  if (answers.menuOption == "Add intern") {
    // Intern
    const intern = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the intern's employee ID?",
      },
      {
        type: "input",
        name: "emailAdress",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the intern's office number?",
      },
    ]);

    team.interns.push(intern);
  }

  if (answers.menuOption == "Finish") {
    
  }
};

start();
