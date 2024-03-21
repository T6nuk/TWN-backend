const express = require('express');
const mainRouter = require('./routes/mainRoute');
const bodyParser = require('body-parser');
require('./models/db');





const app = express();
app.use(express.json());
app.use(mainRouter);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(5000, ()=>{
    console.log("Server is running");
})