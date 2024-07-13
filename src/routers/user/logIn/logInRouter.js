require('dotenv').config();
const express =  require('express');
const router = express.Router();

const path = require('path');
const config = require(process.env.PATH_CONFIG);

// Controlador
const logInController = require(path.join(config.CONTROLADORES, 'logInController'));


// Ruta GET para obtener todos los usuarios
router.get('/', (req, res) => logInController.raiz(req, res));
// router.get('/', (req, res) => logInController.raiz(req, res));

module.exports = router;