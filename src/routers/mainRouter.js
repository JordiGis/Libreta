const express = require('express');
const router = express.Router();
const path = require('path');
require('dotenv').config();
const config = require(process.env.PATH_CONFIG);

const userRouter = require(`${config.RUTAS}/user/userRouter`);
const logInRouter = require(`${config.RUTAS}/user/logIn/logInRouter`);

// Ruta raiz
router.get('/', (req, res) => {
    res.send('¡Hola desde la ruta /!');
});

// ruta y sus derivados ruta/:path?'
router.use('/home', userRouter);

// ruta y sus derivados ruta/:path?'
router.use('/login', logInRouter);

router.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

// Exportar el módulo
module.exports = router;
