const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');

// Initializations
const app = express();
const index_routes = require('./routes/index');
const user_routes = require('./routes/user');
const note_routes = require('./routes/note');

// Settings
app.set('port', process.env.PORT || 4000);
app.set('static_files', path.join(__dirname, 'public'));

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(app.get('static_files')));

// Routes
app.use(index_routes);
app.use(user_routes);
app.use(note_routes);

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server running on PORT', app.get('port'));
});