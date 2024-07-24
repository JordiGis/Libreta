require('dotenv').config();
const path = require('path');
const config = require('/app/config.js');
const ClassController = require(path.join(config.INTERFACES, 'controller'));

class logInController extends ClassController {
    async raiz(req, res) {
        let paramas = {
            nombre: "test",
            email: "test@test",
            accion: (req.baseUrl.toLowerCase() === '/login')? "login": "signUp"
        };
        res.render(path.join(config.VISTAS, 'acceso'), { paramas });
    }

    


    
}

module.exports = new logInController;