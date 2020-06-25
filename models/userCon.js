const User = require('./userSchema.js');
const users = require('./users.js');
const loginUs = require('./loginCon.js');

exports.addUser = (req,res)=>{
    if( req.body.email && req.body.password){
        const email = req.body.email;
        const password =  req.body.password;
        user = new users(email,password);
        user.save();
    }
    res.redirect('/login');
};