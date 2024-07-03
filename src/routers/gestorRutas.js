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
router.get('/', (req, res) => {
    switch (req.path) {
        case '/':
            homeController.index(req, res);
            break;
        /*
        case '/about':
            aboutController.index(req, res);
            break;
        case '/contact':
            contactController.index(req, res);
            break;
        */
    }
});

// Exportar el módulo
module.exports = router;
