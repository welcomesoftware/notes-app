const mongoose = require('mongoose');

const config = {
    
    port: 27017
};

// Initialization
mongoose.connect('mongodb://localhost/notes-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(db => console.log('Database is connected on PORT', config.port))
.catch(err => console.error(err));
