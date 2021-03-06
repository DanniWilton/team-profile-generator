const employee = require("../lib/Employee.js");

class manager extends employee {
    constructor(name, email, id, officeNumber){
        super(name, email, id);
        this.officeNumber = officeNumber;
        if(this.officeNumber === undefined){
            throw "Please provide Employee details."
        }
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return 'manager';
    }
}
module.exports = manager;