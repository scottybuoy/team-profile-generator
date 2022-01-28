const generateManager = function(manager) {
    return `
        <div class="card">
            <div class="card-title">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </div>
            <div class="card-body">
                <p class="employee-info">ID: ${manager.id}</p>
                <p class="employee-info">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="employee-info">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    `;
};


const generateEngineer = function(engineer) {

    return `
    <div class="card">
    <div class="card-title">
        <h2>${engineer.name}</h2>
        <h3>Manager</h3>
    </div>
    <div class="card-body">
        <p class="employee-info">ID: ${engineer.id}</p>
        <p class="employee-info">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="employee-info">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
</div>
    `
}


const generateIntern = function(intern) {

    return `
    <div class="card">
    <div class="card-title">
        <h2>${intern.name}</h2>
        <h3>Manager</h3>
    </div>
    <div class="card-body">
        <p class="employee-info">ID: ${intern.id}</p>
        <p class="employee-info">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class="employee-info">School: ${intern.school}</p>
    </div>
</div>
    `
}





generateHTML = (data) => {

    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }  
    }

    const employeeCards = pageArray.join("");
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;

}

const generateTeamPage = function(employeeCards) {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header id="header">
            <h1>The Freshest Team</h1>
        </header>
        <main id="card-container">
          ${employeeCards}
        </main>
    </body>
    </html>
    `;

}


module.exports = generateHTML;