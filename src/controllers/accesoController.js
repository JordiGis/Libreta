require('dotenv').config();
const path = require('path');
const config = require('/app/config.js');
const ClassController = require(path.join(config.INTERFACES, 'controller'));
const repositoryUser = require(path.join(config.REPOSITORY, 'usuariosRepository'));

const dominio = config.DOMAIN+config.URL_RAIZ;


class accesoController extends ClassController {

    async getRaiz(req, res) {
        let paramas = {
            actionLogIn: dominio+"login",
            actionSignUp: dominio+"signUp",
            nombre: "test",
            email: "test@test",
            accion: (req.baseUrl.toLowerCase() === '/login')? "login": "signUp"
        };
        res.render(path.join(config.VISTAS, 'acceso'), { paramas });
    }

    async postRaiz(req, res) {
        const body = req.body;
        res.send(`Datos recibidos: ${JSON.stringify(body)}`);
    }

    


    
}

module.exports = new accesoController;