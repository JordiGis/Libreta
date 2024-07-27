const express = require('express');
const router = express.Router();
const path = require('path');
require('dotenv').config();
const config = require('/app/config.js');

const userRouter = require(`${config.RUTAS}/user/userRouter`);
const accesoRouter = require(`${config.RUTAS}/user/acceso/accesoRouter`);

// Ruta raiz
router.get('/', (req, res) => {
    res.send('¡Hola desde la ruta /!');
});

// ruta y sus derivados ruta/:path?'
router.use('/home', userRouter);

// ruta y sus derivados ruta/:path?'
router.use('/login', accesoRouter);
router.use('/signup', accesoRouter);


router.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

// Exportar el módulo
module.exports = router;
