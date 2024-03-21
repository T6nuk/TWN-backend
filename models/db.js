const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:asd123asd@twn-backend.qqoyenk.mongodb.net/?retryWrites=true&w=majority&appName=TWN-backend')
    .then(() => {
        console.log('connected to db')
    }).catch((error) => {
        console.log(error)
});

require('./resident');