// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
    constructor(name, id, email, github) {
        this.role = "Engineer";
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getName() {
       return this.name;
    }
    getId(){
       return this.id;
    }
    getEmail(){
       return this.email;
    }
    getGithub(){
       return this.github;
    }
    getRole(){
       return this.role;
    }
}

module.exports = Engineer;