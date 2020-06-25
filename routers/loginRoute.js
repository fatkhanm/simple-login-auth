const express = require('express');
const path = require('path');
const loginCon = require('../models/loginCon.js');

const router = express.Router();

router.get('/login',(req, res, next) =>{
    res.sendFile(path.join(__dirname,'../','public','Login_v1','index.html'));
});
router.post('/login',loginCon.loginUser);

module.exports = router;