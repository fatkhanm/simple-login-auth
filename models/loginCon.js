const user = require('./users');

exports.loginUser = (req,res) =>{
    if( req.body.email && req.body.password){
        const email = req.body.email;
        const password =  req.body.password;
        const log = user.login(email,password);
        console.log(log);
        if(log){
            res.redirect('/dashboard');
        }else{
            res.redirect('/login');
        }
    }
};