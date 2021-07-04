class employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        if(this.name === undefined || this.id === undefined || this.email === undefined){
            throw "Please provide employee details"
        }
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'employee';
    }
}
module.exports = employee;