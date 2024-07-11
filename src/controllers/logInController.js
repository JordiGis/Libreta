require('dotenv').config();
const path = require('path');
const config = require(process.env.PATH_CONFIG);
const ClassController = require(path.join(config.INTERFACES, 'controller'));

class homeController extends ClassController {
    async raiz(req, res) {
        let datosParaVue = {
            titulo: "Información",
            mensaje: "¡Hola desde la ruta /home/info!"
        };
        res.render(path.join(config.VISTAS, 'index'), { datosParaVue });
    }


    
}

module.exports = new homeController;