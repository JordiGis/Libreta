require('dotenv').config();
const express =  require('express');
const router = express.Router();

const path = require('path');
const config = require('/app/config.js');

// Controlador
const accesoController = require(path.join(config.CONTROLADORES, 'accesoController'));


// Ruta GET para obtener todos los usuarios
router.get('/', (req, res) => accesoController.raiz(req, res));
// router.get('/', (req, res) => accesoController.raiz(req, res));

router.post('/', (req, res) => accesoController.raiz(req, res));

module.exports = router;