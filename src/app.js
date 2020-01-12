const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const morgan = require('morgan');
const path = require('path');


// Initializations
const app = express();
require('./database');
const index_routes = require('./routes/index');
const user_routes = require('./routes/users');
const note_routes = require('./routes/notes');

// Settings
app.set('port', process.env.PORT || 4000);
app.set('public', path.join(__dirname, 'public'));

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: 'MySecretSession1',
    resave: true,
    saveUninitialized: true
}));

// Routes
app.use(index_routes);
app.use(user_routes);
app.use(note_routes);

// Static files
app.use(express.static(app.get('public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server running on PORT', app.get('port'));
});