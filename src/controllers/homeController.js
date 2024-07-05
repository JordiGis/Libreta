const path = require('path');
const config = require('../../config');


// xports.index = (req, res) => {
//     res.send('Home Page');
// };



// Manejador para la ruta '/'
function index (req, res) {
    // res.sendFile(path.join(config.VISTAS, 'index.html'));
    res.sendFile(path.join(config.VISTAS, 'index.html'));


    // res.render('index', {
    //     title: 'Home Page',
    //     message: '¡Hola Mundo!'
    // });
};




// Exportar el controlador
const homeController = {
    index
};

module.exports = homeController;