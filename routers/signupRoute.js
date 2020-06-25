const express = require('express');
const path = require('path');
const userCon = require('../models/userCon.js');
const userSchema = require('../models/userSchema.js');
const router = express.Router();

router.get('/signup',(req, res, next) =>{
    res.sendFile(path.join(__dirname,'../','public','Signup_v1','index.html'));
});

router.post('/signup',userCon.addUser); 
router.get('/dashboard',(req,res)=>{
    res.send('<h>Welcome To Dashboard</h>');
});

module.exports = router;