const fs = require("fs");
const inquirer = require("inquirer");
// const employee = require("./lib/employee.js");
const manager = require("./lib/manager.js");
const intern = require("./lib/intern.js");
const engineer = require("./lib/engineer.js");

let currentTeam = ``;

inquirer.prompt([
            {
                type: "input",     
                name: 'managerName',
                message: 'Enter Manager name: '
            },
            {
                type: "input",
                name: 'managerEmail',
                message: 'Enter Manager email address: ',
            },
            {
                type: "input",
                name: 'managerId',
                message: 'Enter Manager ID: ',
            },
            {
                type: "input",
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
            type: "input",
            name: 'name',
            message: 'Enter Engineer name: ',
        },
        {
            type: "input",
            name: 'email',
            message: 'Enter Engineer email address: ',
        },
        {
            type: "input",
            name: 'id',
            message: 'Enter Engineer ID: ',
        },
        {
            type: "input",
            name: 'github',
            message: 'Enter Engineer github username: ',
        },
        ])
            .then((answers) => {
                let newTeamMember = new engineer(
                answers.name,
                answers.email,
                answers.id,
                answers.github,
            );
            currentTeam.push(engineer);
            console.log(JSON.stringify(answers, null, " "));
            if (answers.add === true) {
                addTeamMemberToCard();
            } else {
                teamComplete
            }
            // let employeeCardHtml = addTeamMemberToCard('engineer', teamMember);
            // currentTeam = currentTeam + employeeCardHtml;
            // if (answers.jobRoles = "engineer") {
            //     engineerQuestions();
            // } else if (answers.jobRoles = "Intern") {
            //     internQuestions();
            // } else {
            //     writeToFile();
            // }
    },
function internQuestions() {
    inquirer.prompt([
        {
            type: "input",
            name: 'name',
            message: 'Enter Intern name: ',
        },
        {
            type: "input",
            name: 'email',
            message: 'Enter Intern email address',
        },
        {
            type: "input",
            name: 'id',
            message: 'Enter Intern ID: ',
        },
        {
            type: "input",
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
            currentTeam.push(intern);
            console.log(JSON.stringify(answers, null, " "));
            if (answers.add === true) {
                addTeamMemberToCard();
            } else {
                teamComplete
            }
            // let employeeCardHtml = addTeamMemberToCard('intern', teamMember);
            // currentTeam = currentTeam + employeeCardHtml;
            // if (answers.jobRoles = "engineer") {
            //     engineerQuestions();
            // } else if (answers.jobRoles = "intern") {
            //     internQuestions();
            // } else {
            //     writeToFile();
            // };
            })})};

            const writeToFile = data => {
                fs.writeToFile("./dist/index.html", data, err => {
                    if (error) {
                        console.log(error);
                        return;
                    } else {
                        console.log("Team profile has been generated successfully")
                    }
                })
            }


            // function writeToFile() {
            //     console.log("added team is " + currentTeam);
            //     fs.writeFile("./dist/index.html", html(currentTeam), (error) =>
            //     error ? console.log(error): console.log("Completed!"));
            // }
            function addTeamMemberToCard(jobRoles, data) {
                if(jobRoles == "manager"){
                    return `
                    <div>
                    <p>Name: ${data.managerName}<p>
                    <p>ID: ${data.managerId}<p>
                    <p><a href="mailto:${data.managerEmail}">Email: $data.managerEmail}</a></p>
                    <p>Office Number: ${data.managerOfficeNumber}</p>
                    </div>`;
                } else if (jobRoles == "engineer"){
                    return`
                    <div>
                    <p>Name: ${data.name}<p>
                    <p>ID: ${data.id}<p>
                    <p><a href="mailto:${data.email}">Email: $data.email}</a></p>
                    <p><a href="${data.github}" target="_blank">Github</a></p>
                    </div>
                    `;
                } else {
                    return `
                    <div>
                    <p>Name: ${data.name}<p>
                    <p>ID: ${data.id}<p>
                    <p><a href="mailto:${data.email}">Email: $data.email}</a></p>
                    <p>School: ${data.school}</p>
                    </div>
                    `;
                }
            }

            function html(currentTeam) {
                return `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                    
                </body>
                </html>`;
            }

