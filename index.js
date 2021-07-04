const fs = require("fs");
const inquirer = require("inquirer");
const employee = require("./lib/employee.js");
const manager = require("./lib/manager.js");
const intern = require("./lib/intern.js");
const engineer = require("./lib/engineer.js")


inquirer.prompt([
            {
                type: input,     
                name: 'managerName',
                message: 'Enter Manager name: '
            },
            {
                type: input,
                name: 'managerEmail',
                message: 'Enter Manager email address: ',
            },
            {
                type: input,
                name: 'managerId',
                message: 'Enter Manager ID: ',
            },
            {
                type: input,
                name: 'managerOfficeNumber',
                message: 'Enter manager office number: ',
            },
            {
                type: "checkbox",
                message: "Select whether the employee is an Engineer or Intern, or select finish to complete building your team",
                name: "jobRoles",
                choices: ["Engineer", "Intern", "Finish"],
            },
        ])

        .then((answers) => {
                let teamManager = new manager(
                answers.managerName,
                answers.managerEmail,
                answers.managerId,
                answers.managerOfficeNumber
            );
            let employeeCardHtml = addTeamMemberToCard('manager', teamManager);
            currentTeam = currentTeam + employeeCardHtml;
            if (answers.jobRoles = "Engineer") {
                engineerQuestions();
            } else if (answers.jobRoles = "Intern") {
                internQuestions();
            } else {
                writeToFile();
            }
        })

function engineerQuestions() {
    inquirer.prompt([
        {
            type: input,
            name: 'name',
            message: 'Enter Engineer name: ',
        },
        {
            type: input,
            name: 'email',
            message: 'Enter Engineer email address: ',
        },
        {
            type: input,
            name: 'id',
            message: 'Enter Engineer ID: ',
        },
        {
            type: input,
            name: 'github',
            message: 'Enter Engineer github username: ',
        },
        ])
            .then((answers) => {
                let teamMember = new engineer(
                answers.name,
                answers.email,
                answers.id,
                answers.github,
            );
            let employeeCardHtml = addTeamMemberToCard('engineer', teamMember);
            currentTeam = currentTeam + employeeCardHtml;
            if (answers.jobRoles = "Engineer") {
                engineerQuestions();
            } else if (answers.jobRoles = "Intern") {
                internQuestions();
            } else {
                writeToFile();
            }
    },
function internQuestions() {
    inquirer.prompt([
        {
            type: input,
            name: 'name',
            message: 'Enter Intern name: ',
        },
        {
            type: input,
            name: 'email',
            message: 'Enter Intern email address',
        },
        {
            type: input,
            name: 'id',
            message: 'Enter Intern ID: ',
        },
        {
            type: input,
            name: 'school',
            message: 'Enter Intern\s school: ',
        }
        ])
            .then((answers) => {
                let teamMember = new intern(
                answers.name,
                answers.email,
                answers.id,
                answers.school
            );
            let employeeCardHtml = addTeamMemberToCard('manager', teamMember);
            currentTeam = currentTeam + employeeCardHtml;
            if (answers.jobRoles = "Engineer") {
                engineerQuestions();
            } else if (answers.jobRoles = "Intern") {
                internQuestions();
            } else {
                writeToFile();
            };
            })})};


