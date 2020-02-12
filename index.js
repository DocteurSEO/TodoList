 
const express = require('express');
 
const ejs = require('ejs');
 
const bodyParser = require('body-parser');


 
const db = require('./db');
const router = require('./routes');


 
db.sync();

 
const app = express();

app.engine('ejs', ejs.renderFile);
 
app.use(bodyParser.urlencoded({extended: false}));

app.use(router)


// on démarre le serveur et on attend les requetes arrivant sur le port 8080 
app.listen(8080);