const employee = require("../lib/Employee.js");

class intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        if(this.school === undefined){
            throw "Please provide Employee details."
        }
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'inter';
    }
}
module.exports = intern;