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
// Definir la ruta '/'
router.get('/', homeController.index);

module.exports = router;
