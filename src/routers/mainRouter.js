const express = require('express');
const router = express.Router();
const path = require('path');
const config = require('/app/config.js');

const HOME = path.join(config.RUTAS, 'home');
const homeRouter = require(path.join(HOME, 'homeRouter'));

const USER = path.join(config.RUTAS, 'user');
const userRouter = require(path.join(USER, 'userRouter'));

const ACCESO = path.join(USER, 'acceso');
const accesoRouter = require(path.join(ACCESO, 'accesoRouter'));

// Ruta raiz
router.get('/', (req, res) => {
    res.send('¡Hola desde la ruta /!');
});

// ruta y sus derivados ruta/:path?'
router.use('/home', homeRouter);

router.use('/user', userRouter);

// ruta y sus derivados ruta/:path?'
router.use('/login', accesoRouter);
router.use('/signup', accesoRouter);


router.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

// Exportar el módulo
module.exports = router;
