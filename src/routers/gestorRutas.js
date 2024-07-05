const express = require('express');
const router = express.Router();

const path = require('path');
const config = require('../../config');
// Página de inicio
const homeController = require(path.join(config.CONTROLADORES, 'homeController'));

router.get('/', (req, res) => {
    res.send('¡Hola desde la ruta /!');
});

router.get('/home', homeController.index);


// Exportar el módulo
module.exports = router;
