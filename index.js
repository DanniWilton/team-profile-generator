const fs = require("fs");
const inquirer = require("inquirer");
// const employee = require("./lib/employee.js");
const manager = require("../lib/manager.js");
const intern = require("../lib/intern.js");
const engineer = require("../lib/engineer.js");
const generateHtml = require("./dist/index.html");


let currentTeam = [];


/// ask to add either engineer or intern  
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
        
        throw new Error("BUGGG");
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
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err? console.error(err) : console.log("YAY! YOUR TEAM PROFILE HAS BEEN GENERATED!!!"))
  }
  function init() {
    inquirer.prompt(questions)
    .then((answers) =>{
      let markdown = generateHtml(answers);
      writeToFile("./dist/index.html", markdown)
    })
    .catch((error) => {
      if(error.isError) {
        console.log('error');
      } else {
        console.log("unknown error occured", error);
      }
    })
  }
init();

