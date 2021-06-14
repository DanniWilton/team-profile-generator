const inquirer = require('inquirer');
const { listenerCount } = require('node:events');

const selectWorkerRole = [
    {
        type: list,
        name: 'workerRole',
        message: 'Select worker role you would like to add: ',
        choices: ['Manager', 'Engineer', 'Intern', 'Finish creating team']
    }
]

const managerQuestions = [
    {
        type: input,     
        name: 'name',
        message: 'Enter Manager name: ',
    },
    {
        type: input,
        name: 'email',
        message: 'Enter Manager email address: ',
    },
    {
        type: input,
        name: 'id',
        message: 'Enter Manager ID: ',
    },
    {
        type: input,
        name: 'officeNumber',
        message: 'Enter manager office number',
    },
]

const engineerQuestions = [
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
        name: 'officeNumber',
        message: 'Enter Engineer Office Number: ',
    },
    {
        type: input,
        name: 'github',
        message: 'Enter Engineer github username: ',
    },
]

const internQuestions = [
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
        name: 'officeNumber',
        message: 'Enter Intern Office Number: ',
    },
    {
        type: input,
        name: 'school',
        message: 'Enter Intern\s school: ',
    },
]

function init() {
    inquirer.prompt(managerQuestions).then((managerDetails) => {
        let manager = new Manager
        (`${managerDetails.name}`, 
        Number(`${managerDetails.id}`), 
        (`${managerDetails.email}`),
        Number(`${managerDetails.officeNumber}`))
        createManagerCard,(manager)
    })
}