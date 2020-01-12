// Initialization
const controller = {};

// Methods
controller.signin = (req, res) => {
    res.send('Ingresando a la app');
};

controller.signup = (req, res) => {
    res.send('Formulario de authenticacion');
};


// Exports
module.exports = controller;