const fs = require("fs");
const inquirer = require("inquirer");
// const employee = require("./lib/employee.js");
const manager = require("./lib/manager.js");
const intern = require("./lib/intern.js");
const engineer = require("./lib/engineer.js");

let currentTeam = [];


/// ask to add eiter enginerr, intern 
function askToCreateMember(){
    return inquirer.prompt([
        {
        type: "list",
        message:
            "Select whether the employee is an Engineer or Intern, or select finish to complete building your team",
        name: "role",
        choices: ["Engineer", "Intern", "Finish"],
        },
    ]).then(memberChoice => {
        const role = memberChoice.role;
  
        if(role.toLowerCase() === 'engineer'){
          return askEngineerDetails();
        }
        if(role.toLowerCase() === 'intern'){
          return askInternDetails();
        }
        if(role.toLowerCase() === 'finish'){
            // generate html
            console.log(currentTeam);
            return; 
        }
        
        throw new Error("BUGGG fix this shit");
    }).then( response => {

        if(response === undefined){
            return;
        }


        if(response.hasOwnProperty('github')){
            currentTeam.push(new engineer(response.name, response.id, response.email, response.github));
        }else{
            currentTeam.push(new intern(response.name, response.id, response.email, response.school));
        };
  
        /// keep asking until user selected Im done
        askToCreateMember()
        
    });
}

function askInternDetails(){
    return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "Enter Intern name: ",
        },
        {
          type: "input",
          name: "email",
          message: "Enter Intern email address",
        },
        {
          type: "input",
          name: "id",
          message: "Enter Intern ID: ",
        },
        {
          type: "input",
          name: "school",
          message: "Enter Interns school: ",
        },
      ])
}

function askEngineerDetails(){
    return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "Enter Engineer name: ",
        },
        {
          type: "input",
          name: "email",
          message: "Enter Engineer email address: ",
        },
        {
          type: "input",
          name: "id",
          message: "Enter Engineer ID: ",
        },
        {
          type: "input",
          name: "github",
          message: "Enter Engineer github username: ",
        },
      ])
}

// generate the html

// ask the user to create a manager
inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "Enter Manager name: ",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Enter Manager email address: ",
    },
    {
      type: "input",
      name: "managerId",
      message: "Enter Manager ID: ",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "Enter manager office number: ",
    },

  ])

  .then((answers) => {
    let teamManager = new manager(
      answers.managerName,
      answers.managerEmail,
      answers.managerId,
      answers.managerOfficeNumber
    );
    currentTeam.push(teamManager);

    return askToCreateMember()
   
  })

function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Engineer name: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter Engineer email address: ",
      },
      {
        type: "input",
        name: "id",
        message: "Enter Engineer ID: ",
      },
      {
        type: "input",
        name: "github",
        message: "Enter Engineer github username: ",
      },
    ])
    .then(
      (answers) => {
        let newTeamMember = new engineer(
          answers.name,
          answers.email,
          answers.id,
          answers.github
        );
        currentTeam.push(engineer); // issue here
        console.log(JSON.stringify(answers, null, " "));
        if (answers.add === true) {
          addTeamMemberToCard();
        } else {
          teamComplete;
        }
      },
      function internQuestions() {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "Enter Intern name: ",
            },
            {
              type: "input",
              name: "email",
              message: "Enter Intern email address",
            },
            {
              type: "input",
              name: "id",
              message: "Enter Intern ID: ",
            },
            {
              type: "input",
              name: "school",
              message: "Enter Interns school: ",
            },
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
              teamComplete;
            }
          });
      }
    );
}

const writeToFile = (data) => {
  fs.writeToFile("./dist/index.html", data, (err) => {
    if (error) {
      console.log(error);
      return;
    } else {
      console.log("Team profile has been generated successfully");
    }
  });
};

function addTeamMemberToCard(jobRoles, data) {
  if (jobRoles == "manager") {
    return `
                    <div>
                    <p>Name: ${data.managerName}<p>
                    <p>ID: ${data.managerId}<p>
                    <p><a href="mailto:${data.managerEmail}">Email: $data.managerEmail}</a></p>
                    <p>Office Number: ${data.managerOfficeNumber}</p>
                    </div>`;
  } else if (jobRoles == "engineer") {
    return `
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
