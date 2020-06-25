const User = require('./userSchema.js');
const bcrypt = require('bcryptjs');

exports.loginUser = (req,res) =>{
    User.findOne({email:req.body.email}).exec((err,user)=>{
        if(err){
            console.log(err);
            return callback(err);
        }else if(!user){
            var err = new Error('User not Found!');
            err.status = 404;
            return callback(err);
        }
        bcrypt.compare(req.body.password,user.password,(err,result)=>{
            if(result){
                res.redirect('/dashboard');
                return(null,user);
            }else{
                return callback();
            }
        })
    });
};