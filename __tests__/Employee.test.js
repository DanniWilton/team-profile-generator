// manager, engineer, intern

// manager questions
// name
// email
// id
// team/ office number

// engineer
// name
// email
// github
// id
// team/ office number

// intern 
// name
// email
// school
// id
// team/office number

const { isMainThread } = require("node:worker_threads");
const Employee = require("../employee.js.js");

describe('employee', () => {

    it("Prompts for employee name, id number and email if parameters aren't provided.",()=>{
        expect(()=>{ new Employee() }).toThrow('Provide all employee details.');
    })
    it("throws an error")
})

//name

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Employee'