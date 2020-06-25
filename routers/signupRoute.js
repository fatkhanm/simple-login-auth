const express = require('express');
const path = require('path');
const userCon = require('../models/userCon.js');
const router = express.Router();

router.get('/signup',(req, res, next) =>{
    res.sendFile(path.join(__dirname,'../','public','Signup_v1','index.html'));
});

router.post('/signup',userCon.addUser); 

module.exports = router;