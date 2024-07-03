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
const raiz = __dirname;
const certs = path.join(raiz, 'certs');
const src = path.join(raiz, 'src');
// const controllers = path.join(src, 'controllers');
/**
 * Controlador de Rutas
 */
const routes = require(path.join(src, 'routers', 'gestorRutas'));

/**
 * Nombre de los archivos de certificados
 */
const key = 'local-key.pem';
const cert = 'local.pem'


// Directorio de archivos estáticos
app.use(express.static(path.join(raiz, 'public')));


// Ruta de prueba
app.get('/', routes);

// Rutas no encontradas
app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

// Opciones de configuración HTTPS
const options = {
    key: fs.readFileSync(path.resolve(certs,key)),
    cert: fs.readFileSync(path.resolve(certs, cert)),
};


// Crear servidor HTTPS
https.createServer(options, app).listen(port, '0.0.0.0', () => {
    console.log(`Servidor HTTPS escuchando en el puerto ${port} en la dirección: https://localhost:${port}`);
});