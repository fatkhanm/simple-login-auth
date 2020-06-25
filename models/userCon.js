const User = require('./userSchema.js');
//const users = require('./userSchema.js');
const loginUs = require('./loginCon.js');

exports.addUser = (req,res)=>{
    if( req.body.email && req.body.password){
        const email = req.body.email;
        const password =  req.body.password;
        userData ={
            email:email,
            password:password
        };
        User.create(userData, function (err, user) {
            if (err) {
                console.log(err);
              return next(err)
            } else {
              return res.redirect('/login');
            }
          });
    }
};