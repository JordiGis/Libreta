// Impotamos el modulo 'express' para poder crear un servidor HTTPS
const express = require('express');

// Importamos el módulo 'https' para poder crear un servidor HTTPS
const https = require('https');

// Importamos el módulo 'path' para poder trabajar con rutas de archivos
const path = require('path');

// Importamos el módulo 'config' para poder acceder a las configuraciones
require('dotenv').config();
const config = require(process.env.PATH_CONFIG);

// Importamos la Base de Datos
const db = require(path.join(config.DB, 'db'));

/**
 * Creacion de un servidor HTTPS en el puerto 443
 */
const app = express();

// Configurar el directorio de vistas y el motor de plantillas
app.set(config.VISTAS);
app.set('view engine', 'ejs');

/**
 * Gestor de Rutas
 */
const gestorRutas = require(path.join(config.RUTAS, 'mainRouter'));
app.use(express.static(config.PUBLIC));

// Delega la gestión de las rutas al gestorRutas
app.use(config.URL_RAIZ, gestorRutas);

// Crear servidor HTTPS
https.createServer(config.httpsOptions, app).listen(config.PORT, '0.0.0.0', () => {
    console.log(`Servidor HTTPS escuchando en el puerto ${config.PORT} en la dirección: https://localhost:${config.PORT}`);
});