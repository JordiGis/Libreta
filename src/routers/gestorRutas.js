const express = require('express');
const router = express.Router();

/**
 * Conrtoles
 */
// Página de inicio
const homeController = require('../controllers/homeController');


/**
 * Rutas
 */
// router.get('/', (req, res) => {
//     switch (req.path) {
//         case '/':
//             ;
//             break;

//         case '/a':
//             "aboutController.index(req, res)";
//             break;
//             /*
//         case '/contact':
//             contactController.index(req, res);
//             break;
//         */
//     }
// });
router.get('/', (req, res) => {
    res.send(homeController.index(req, res));
});

router.get('/a', (req, res) => {
    res.send('¡Hola desde la ruta /saludo!');
});

// Exportar el módulo
module.exports = router;
