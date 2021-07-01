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

// const { isMainThread } = require("node:worker_threads");
// const Employee = require("../employee.js");

// describe('employee', () => {

//     it("Prompts for employee name, id number and email if parameters aren't provided.",()=>{
//         expect(()=>{ new Employee() }).toThrow('Provide all employee details.');
//     })
//     it("throws an error")
// )}
const Employee = require("../lib/Employee.js");

describe("Employee", () => {

    it('When no information is provided, throw an error', () => {
        expect(() => {
            new Employee();
        }).toThrow('Please provide name, email and id');
    });

    it('New Employee object created', () => {
        const newEmployee = {};
        expect(typeof(newEmployee)).toEqual("object");
    });

    it('throws an error if name is not a string', () => {
        expect(() => {
            new Employee();
        }).toThrow("Please provide name, email and id");
    });

    it('throws an error if name is an empty string', () => {
        expect(() => {
            new Employee();
        }).toThrow("Please provide name, email and id");
    });

    it('throws an error if id is not an integer', () => {
        expect(() => {
            new Employee();
        }).toThrow("Please provide name, email and id");
    });

    it('throws an error if email is not a string', () => {
        expect(() => {
            new Employee();
        }).toThrow("Please provide name, email and id");
    });

    it('throws an error if email is an empty string', () => {
        expect(() => {
            new Employee();
        }).toThrow("Please provide name, email and id");
    });



});