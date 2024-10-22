// Importamos el módulo 'path' para poder trabajar con rutas de archivos
const path = require('path');

// Importamos el módulo 'fs' para poder leer los certificados
const fs = require('fs');

// Definir configuraciones
/**
 * Puerto del servidor HTTPS
 */
const PORT = 443

// Dominio del servidor
const DOMAIN = 'https://localhost';

/**
 * Rutas de los directorios
 */
const RAIZ = __dirname;
const SRC = path.join(RAIZ, 'src');
const CERTS = path.join(RAIZ, 'certs');
const DB = path.join(SRC, 'db');
const CONTROLADORES = path.join(SRC, 'controllers');
const RUTAS = path.join(SRC, 'routers');
const VISTAS = path.join(path.join(SRC, 'views'), 'pages');
const MODELOS = path.join(SRC, 'models');
const REPOSITORY = path.join(SRC, 'repository');
const DAO = {
    path: path.join(path.join(MODELOS, 'dao'), 'mongoDAO'), // En caso de quere otro DAO, cambiar esta línea
    modelos: {
        usuario: 'Usuario', // Nombre de las colecciones, tambien sera el nombre para los esquemas de en este caso MongoDb
        tarea: 'Tarea', // Nombre de las colecciones, tambien sera el nombre para los esquemas de en este caso MongoDb
        log: 'Log' // Nombre de las colecciones, tambien sera el nombre para los esquemas de en este caso MongoDb
    }
}
const PUBLIC = path.join(SRC, 'public');
const UTILS = path.join(SRC, 'utils');
const INTERFACES = path.join(SRC, 'interfaces');

/**
* Nombre de los archivos de certificados
*/
const NAME_KEY = 'local-key.pem';
const NAME_CERT = 'local.pem';

/**
 * Opciones de configuración HTTPS
 */
const httpsOptions = {
    key: fs.readFileSync(path.resolve(CERTS, NAME_KEY)),
    cert: fs.readFileSync(path.resolve(CERTS, NAME_CERT))
}

/**
 * URL raíz
 */
const URL_RAIZ = '/';

const URLS = {
    raiz: DOMAIN+'/',
    signUp: DOMAIN+'/signUp',
    login: DOMAIN+'/login',
    home: DOMAIN+'/home',
    user: DOMAIN+'/user',
}

/**
 * Objeto a exportar
 */
const config = {
    DOMAIN,
    PORT,
    RAIZ,
    SRC,
    CERTS,
    DB,
    CONTROLADORES,
    RUTAS,
    VISTAS,
    MODELOS,
    REPOSITORY,
    DAO,
    PUBLIC,
    UTILS,
    INTERFACES,
    httpsOptions,
    URL_RAIZ,
    URLS,
}



module.exports = config;