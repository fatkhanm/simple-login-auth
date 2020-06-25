const users = [];
module.exports = class Users{
    constructor(eml,password){
        this.user = {
            email:eml,
            password:password
        }
    }
    save(){
        users.push(this.user);
        console.log(users);
    }
    static fetchAll(){
        return users;
    }
    static login(eml,pass){
        var log = false;
        if(users[0].email === eml && users[0].password === pass){
            log = true;
        }
        console.log(users[0].email);
        console.log(users[0].password);
        console.log(log);
        return log;
    }
};