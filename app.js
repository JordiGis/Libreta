// Impotamos el modulo 'express' para poder crear un servidor HTTPS
const express = require('express');

// Importamos el módulo 'https' para poder crear un servidor HTTPS
const https = require('https');

// Importamos el módulo 'path' para poder trabajar con rutas de archivos
const path = require('path');

// Importamos el módulo 'config' para poder acceder a las configuraciones
const config = require('./config');

/**
 * Creacion de un servidor HTTPS en el puerto 443
 */
const app = express();

/**
 * Gestor de Rutas
 */
const gestorRutas = require(path.join(config.RUTAS, 'gestorRutas'));
app.use(express.static(config.PUBLIC));

app.use(config.URL_RAIZ, gestorRutas);

// app.use('/', (req, res) => {
//     res.send('¡Hola Mundo!');
// });

// Crear servidor HTTPS
https.createServer(config.httpsOptions, app).listen(config.PORT, '0.0.0.0', () => {
    console.log(`Servidor HTTPS escuchando en el puerto ${config.PORT} en la dirección: https://localhost:${config.PORT}`);
});