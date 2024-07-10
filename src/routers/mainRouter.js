const express = require('express');
const router = express.Router();
const path = require('path');
const config = require('../../config');

const userRouter = require(`${config.RUTAS}/user/userRouter`);

// Ruta raiz
router.get('/', (req, res) => {
    res.send('¡Hola desde la ruta /!');
});

// ruta y sus derivados ruta/:path?'
router.use('/home', userRouter);

// Exportar el módulo
module.exports = router;
