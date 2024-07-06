const path = require('path');
const config = require('../../config');
const ClassController = require(path.join(config.INTERFACES, 'controller'));
const urlUtils = require(path.join(config.UTILS, 'urlUtils'));
const ClassUsuariosRepository = require(path.join(config.REPOSITORY, 'usuariosRepository'));
// const vistaIndex = require(path.join(config.VISTAS, 'index'));
const usuariosRepository = new ClassUsuariosRepository();

class homeController extends ClassController {
    ruta = '/home/:path?';

    async index(req, res) {
        const subruta = urlUtils.getSubRuta(req.path);
        // Lógica para determinar la acción basada en la sub-ruta
        switch (subruta) {
            case 'info':
                return info(req, res);
            // Añadir más casos según sea necesario para otras sub-rutas de /home
            default:
                // Acción por defecto, como mostrar la página principal de /home
                let usuario = await usuariosRepository.getForId('66897cee03642530486a957d');
                res.json(usuario);
                console.log(usuario);
        }
    }


    
}


function info(req, res) {
    let datosParaVue = {
        titulo: "Información",
        mensaje: "¡Hola desde la ruta /home/info!"
    };
    res.render(path.join(config.VISTAS, 'index'), { datosParaVue });
}
module.exports = homeController;