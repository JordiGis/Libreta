const express = require('express');
// Importamos el módulo 'https' para poder crear un servidor HTTPS
const https = require('https');
// Importamos el módulo 'fs' para poder leer los certificados
const fs = require('fs');
// Importamos el módulo 'path' para poder trabajar con rutas de archivos
const path = require('path');


/**
 * Creacion de un servidor HTTPS en el puerto 443
 */
const app = express();
const port = 443;

/**
 * Constantes de las Rutas Ineternas
 */
const certs = path.join(__dirname, 'certs');

/**
 * Nombre de los archivos de certificados
 */
const key = 'local-key.pem';
const cert = 'local.pem'


// Directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Hello HTTPS World!');
});


// Opciones de configuración HTTPS
const options = {
    key: fs.readFileSync(path.resolve(certs,key)),
    cert: fs.readFileSync(path.resolve(certs, cert)),
};


// Crear servidor HTTPS
https.createServer(options, app).listen(port, '0.0.0.0', () => {
    console.log(`Servidor HTTPS escuchando en el puerto ${port}`);
});