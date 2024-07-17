require('dotenv').config();
const path = require('path');
const config = require(process.env.PATH_CONFIG);
const ClassController = require(path.join(config.INTERFACES, 'controller'));

class logInController extends ClassController {
    async raiz(req, res) {
        let log = {
            nombre: "test",
            email: "test@test"
        };
        res.render(path.join(config.VISTAS, 'logInHTML'), { log });
    }


    
}

module.exports = new logInController;