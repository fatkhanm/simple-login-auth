const express = require('express');
const Express = require('express');
const http = require('http');
const login = require('./routers/loginRoute.js');
const signUp = require('./routers/signupRoute.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

const app = Express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(login);
app.use(signUp);
app.use(session({
    secret: 'work hard',
    resave:true,
    saveUninitialized:false
}));
const server = http.createServer(app);
mongoose.connect(
    'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false'
).then(result=>{
    server.listen(3000);
}).catch(err=>{
    console.log(err);
});