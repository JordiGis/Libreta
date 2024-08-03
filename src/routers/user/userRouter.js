// usersRouter.js
const express =  require('express');
const router = express.Router();
const path = require('path');
const config = require('/app/config.js');
const { auth } = require(path.join(config.UTILS, 'auth'));


// Controlador
const userController = require(path.join(config.CONTROLADORES, 'userController'));


// Ruta GET para obtener todos los usuarios
router.get('/', auth, (req, res) => userController.raiz(req, res));

module.exports = router;
