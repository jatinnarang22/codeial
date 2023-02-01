const express = require('express');
const CookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expresslayouts =require('express-ejs-layouts');
const db = require('./config/mongoose'); 

app.use(express.urlencoded());
app.use(CookieParser());

console.log()
app.use(express.static('./assets'));
app.use(expresslayouts);
 
//extract style and script form sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use('/',require('./routes/index'));


// set the view engine
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server :${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})
