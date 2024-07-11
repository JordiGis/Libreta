// usersRouter.js
const express =  require('express');
const router = express.Router();

const path = require('path');
const config = require('../../../config');

// Controlador
const homeController = require(path.join(config.CONTROLADORES, 'homeController'));


// Ruta GET para obtener todos los usuarios
router.get('/', (req, res) => homeController.raiz(req, res));

router.get('/info', (req, res) => homeController.info(req, res));

router.get('/up', (req, res) => homeController.up(req, res));

router.get('/del', (req, res) => homeController.del(req, res));


module.exports = router;
