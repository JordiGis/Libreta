// Importamos los módulos necesarios
const express = require('express');
const https = require('https');
const path = require('path');
require('dotenv').config();
const config = require('/app/config.js');
const db = require(path.join(config.DB, 'db'));
const bodyParser = require('body-parser'); // Importamos body-parser

/**
 * Creación de un servidor HTTPS en el puerto 443
 */
const app = express();

// Configurar el directorio de vistas y el motor de plantillas
app.set(config.VISTAS);
app.set('view engine', 'ejs');

// Middlewares para parsear el cuerpo de la solicitud usando body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar el middleware para servir archivos estáticos
app.use(express.static(config.PUBLIC));
app.use(express.static(config.VISTAS));

/**
 * Gestor de Rutas
 */
const gestorRutas = require(path.join(config.RUTAS, 'mainRouter'));

// Delega la gestión de las rutas al gestorRutas
app.use(config.URL_RAIZ, gestorRutas);

// Crear servidor HTTPS
https.createServer(config.httpsOptions, app).listen(config.PORT, '0.0.0.0', () => {
    console.log(`Servidor HTTPS escuchando en el puerto ${config.PORT} en la dirección: https://localhost:${config.PORT}`);
});
