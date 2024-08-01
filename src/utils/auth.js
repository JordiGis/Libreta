const path = require('path');
const config = require('/app/config.js');
const Usuario = require(path.join(config.MODELOS, 'usuario'));
const userRepository = require(path.join(config.REPOSITORY, 'usuariosRepository'));
const { Log, type, status } = require(path.join(config.MODELOS, 'log'));
const logRepository = require(path.join(config.REPOSITORY, 'logRepository'));


class auth {
    constructor() {    }

    authLogIn(body) {
        const {  } = body;
        // Se realizara con tokens de sesion
        return false;
    }

    // authAdmin(body) {
    //     const { email, password } = body;
    //     se implementaran roles
    //     return false;
    // }
    
}
module.exports = new auth;