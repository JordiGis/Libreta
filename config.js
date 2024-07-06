// Importamos el módulo 'path' para poder trabajar con rutas de archivos
const path = require('path');

// Importamos el módulo 'fs' para poder leer los certificados
const fs = require('fs');

// Definir configuraciones
/**
 * Puerto del servidor HTTPS
 */
const PORT = 443

/**
 * Rutas de los directorios
 */
const RAIZ = __dirname;
const SRC = path.join(RAIZ, 'src');
const CERTS = path.join(RAIZ, 'certs');
const DB = path.join(SRC, 'db');
const CONTROLADORES = path.join(SRC, 'controllers');
const RUTAS = path.join(SRC, 'routers');
const VISTAS = path.join(SRC, 'views');
const MODELOS = path.join(SRC, 'models');
const DAO = path.join(path.join(MODELOS, 'dao'), 'mongoDAO'); // En caso de quere otro DAO, cambiar esta línea
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

/**
 * Objeto a exportar
 */
const config = {
    PORT,
    RAIZ,
    SRC,
    CERTS,
    DB,
    CONTROLADORES,
    RUTAS,
    VISTAS,
    MODELOS,
    DAO,
    PUBLIC,
    UTILS,
    INTERFACES,
    httpsOptions,
    URL_RAIZ
}



module.exports = config;