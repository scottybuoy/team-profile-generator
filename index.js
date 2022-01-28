const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")
const generateHTML = require("./src/generateHTML");

console.log("Are we working?");

const teamMembers = [];

const addManager = () => {
    return inquirer.prompt(
        [{
            type: "input",
            name: "name",
            message: "Who is the team manager?"
        },

        {
            type: "input",
            name: "id",
            message: "Please enter your ID"
        },

        {
            type: "input",
            name: "email",
            message: "Please enter your email address"
        },

        {
            type: "input",
            name: "officeNumber",
            message: "Please enter your office number"
        },

    ]).then((managerInfo) => {
        const { name, id, email, officeNumber } = managerInfo;
        const manager = new Manager(name, id, email, officeNumber);

        teamMembers.push(manager);
        console.log(manager);
    })
};




const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Select a role for your employee",
            choices: ["Engineer", "Intern"]
        },

        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },

        {
            type: "input",
            name: "id",
            message: "Please enter the employee's ID"
        },

        {
            type: "input",
            name: "email",
            message: "Please enter the employee's email"
        },

        {
            type: "input",
            name: "github",
            message: "Please enter the employee's github username",
            when: (input) => input.role === "Engineer"
        },

        {
            type: "input",
            name: "school",
            message: "Pleaser enter the name of the intern's school",
            when: (input) => input.role === "Intern"
        },

        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then((employeeInfo) => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeInfo;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer(name, id, email, github);
        } else if (role === "Intern") {
            employee = new Intern(name, id, email, school);
        }

        teamMembers.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamMembers);
        } else {
            return teamMembers;
        }
    })
};

const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.error(err);
            return
        } else {
            console.log("Your team page has been created successfully!")
        }
    })
};



addManager()
    .then(addEmployee)
    .then(teamMembers => {
        return generateHTML(teamMembers);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
