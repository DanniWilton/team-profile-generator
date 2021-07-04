const employee = require("../lib/Employee.js");
const prettier = require("prettier");

describe("employee", () => {

  it("throws an error when no information is provided", () => {
      expect(() => {
          new employee();
      }).toThrow(console.error(err));
    });
    it('New Employee object created', () => {
        const newEmployee = {};
        expect(typeof(newEmployee)).toEqual("object");
    });

    it('throws an error if name is not a string', () => {
        expect(() => {
            new employee();
        }).toThrow("Please provide name, email and id");
    });

    it('throws an error if name is an empty string', () => {
        expect(() => {
            new employee();
        }).toThrow("Please provide name, email and id");
    });

    it('throws an error if id is not an integer', () => {
        expect(() => {
            new employee();
        }).toThrow("Please provide name, email and id");
    });

    it('throws an error if email is not a string', () => {
        expect(() => {
            new employee();
        }).toThrow("Please provide name, email and id");
    });

    it('throws an error if email is an empty string', () => {
        expect(() => {
            new employee();
        }).toThrow("Please provide name, email and id");
    });

    expect(actual).toEqual(prettier.format(expected, { parser: "html" }));

});
module.exports = generateEmployeeCard;