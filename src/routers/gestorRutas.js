const express = require('express');
const router = express.Router();
const path = require('path');
const config = require('../../config');

// Clases Controladores
const ClassHomeController = require(path.join(config.CONTROLADORES, 'homeController'));

// Instancias Controladores
const homeController = new ClassHomeController();

// Ruta raiz
// router.get('/:path?', (req, res) => {
//     res.send('¡Hola desde la ruta /!');
// });

// Rutas de los Modulos
router.get(homeController.getRuta(), homeController.index);


// Exportar el módulo
module.exports = router;
