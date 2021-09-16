class employee {
    constructor(name, email, id){
        this.name = name;
        this.email = email;
        this.id = id;
        if(this.name === undefined || this.email === undefined || this.id === undefined ){
            throw "Please provide employee details"
        }
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getId(){
        return this.id;
    }
    getRole(){
        return 'employee';
    }
}
module.exports = employee;