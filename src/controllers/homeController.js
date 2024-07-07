const path = require('path');
const config = require('../../config');
const ClassController = require(path.join(config.INTERFACES, 'controller'));
const urlUtils = require(path.join(config.UTILS, 'urlUtils'));
const Usuario = require(path.join(config.MODELOS, 'usuario'));
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
                
            case 'del':
                return del(req, res);
            // Añadir más casos según sea necesario para otras sub-rutas de /home
            default:
                // Acción por defecto, como mostrar la página principal de /home
                let usuario = new Usuario("Juan", new Date(), "juan@gestor.es", "1234");

                let result = await usuariosRepository.add(usuario);
                res.json(result);
                console.log(result);
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

function del(req, res) {
    let usuario = usuariosRepository.getForEmail("juan@gestor.es");
    console.log(usuario);
    // let result = usuariosRepository.deleteForId(usuario.id);
    res.json(usuario);
    // res.send(result);
}

module.exports = homeController;