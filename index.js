const express = require('express');
const Express = require('express');
const http = require('http');
const login = require('./routers/loginRoute.js');
const signUp = require('./routers/signupRoute.js');
const bodyParser = require('body-parser');

const app = Express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(login);
app.use(signUp);
const server = http.createServer(app);
server.listen(3000);