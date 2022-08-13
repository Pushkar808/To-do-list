const express = require('express');
const dbConfig = require('./config/config');
const Todo = require('./models/schema');
const path=require('path');
const expressLayout=require('express-ejs-layouts');
const app = express();
const port = 8000;



app.use(express.static('./assets'));
app.use(expressLayout);
app.set('layout extractStyles',true);
app.set('layout extractScript',true);

app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.listen(port, (err) => {
    if (err)
        console.log("error");
    console.log("Conneted to server at port 8000")
});
