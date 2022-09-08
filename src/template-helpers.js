function getIcon(role) {
  if (role == "Manager") {
    return "☕";
  }
  if (role == "Engineer") {
    return "☕";
  }
  if (role == "Intern") {
    return "☕";
  }
}

/**
 * Returns a string containing HTML generated from the `team` parameter.
 */
export function generateRoster(team) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <title>Team Roster</title>
      </head>
      <body>
        <header>My Team</header>
        <main>

          ${team.managers
            .map(
              (manager) => `
              <div class="card">
                <header>
                  ${manager.getName()}
                  <div>${getIcon(manager.getRole())} ${manager.getRole()}</div>
                </header>
                <main>
                  <div>ID: ${manager.getId()}</div>
                  <div>Email: ${manager.getEmail()}</div>
                  <div>Office number: ${manager.getOfficeNumber()}</div>
                </main>
              </div>
            `
            )
            .join("")}

          ${team.engineers
            .map(
              (engineer) => `
              <div class="card">
                <header>
                  ${engineer.getName()}
                  <div>${getIcon(engineer.getRole())} ${engineer.getRole()}</div>
                </header>
                <main>
                  <div>ID: ${engineer.getId()}</div>
                  <div>Email: ${engineer.getEmail()}</div>
                  <div>GitHub: ${engineer.getGithub()}</div>
                </main>
              </div>
            `
            )
            .join("")}

          ${team.interns
            .map(
              (intern) => `
              <div class="card">
                <header>
                  ${intern.getName()}
                  <div>${getIcon(intern.getRole())} ${intern.getRole()}</div>
                </header>
                <main>
                  <div>ID: ${intern.getId()}</div>
                  <div>Email: ${intern.getEmail()}</div>
                  <div>School: ${intern.getSchool()}</div>
                </main>
              </div>
            `
            )
            .join("")}
          
        </main>
      </body>
    </html>
  `;
}
