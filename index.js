import inquirer from "inquirer";
import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import { generateRoster } from "./src/template-helpers.js";
import fs from "fs";

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
      name: "id",
      message: "What is your manager's employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your manager's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your manager's office number?",
    },
  ]);

  team.managers.push(new Manager(manager.name, manager.id, manager.email, manager.officeNumber));

  while (true) {
    // Menu
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "menuOption",
        message: "What do you want to do next?",
        choices: ["Add engineer", "Add intern", "Finish"],
      },
    ]);

    // answers.menuOption is the user's choice

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
          name: "id",
          message: "What is the engineer's employee ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the engineer's email address?",
        },
        {
          type: "input",
          name: "github",
          message: "What is the engineer's github username?",
        },
      ]);

      team.engineers.push(
        new Engineer(engineer.name, engineer.id, engineer.email, engineer.github)
      );
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
          name: "id",
          message: "What is the intern's employee ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the intern's email address?",
        },
        {
          type: "input",
          name: "school",
          message: "What is the intern's school?",
        },
      ]);

      team.interns.push(new Intern(intern.name, intern.id, intern.email, intern.school));
    }

    if (answers.menuOption == "Finish") {
      fs.writeFileSync("./dist/index.html", generateRoster(team));
      process.exit();
    }
  }
};

start();
