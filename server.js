const express = require('express');
const mainRouter = require('./routes/mainRoute');




const app = express();
app.use(mainRouter);

app.listen(5000, ()=>{
    console.log("Server is running");
})