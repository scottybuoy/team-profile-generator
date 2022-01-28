const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")

console.log("Are we working?");

const teamMembers = [];

const promptUser = () => {
    inquirer.prompt(
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

    ]).then((managerAnswers) => {
        const { name, id, email, officeNumber } = managerAnswers;
        const manager = new Manager(name, id, email, officeNumber);

        teamMembers.push(manager);
        addEmployee();

        console.log(teamMembers);
    })
}










promptUser();


const generateHtml = () => {

}