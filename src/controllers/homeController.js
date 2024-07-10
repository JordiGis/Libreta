const path = require('path');
const config = require('../../config');
const ClassController = require(path.join(config.INTERFACES, 'controller'));
const Usuario = require(path.join(config.MODELOS, 'usuario'));
const usuariosRepository = require(path.join(config.REPOSITORY, 'usuariosRepository'));

class homeController extends ClassController {
    async raiz(req, res) {
        let usuario = new Usuario("Juan", new Date(), "juan@gestor.es", "1234");
        let result = await usuariosRepository.add(usuario);
        res.json(result);
        console.log(result);
    }

    info(req, res) {
        let datosParaVue = {
            titulo: "Información",
            mensaje: "¡Hola desde la ruta /home/info!"
        };
        res.render(path.join(config.VISTAS, 'index'), { datosParaVue });
    }
    
    async del(req, res) {
        let usuario = usuariosRepository.getForEmail("juan@gestor.es");
        console.log(usuario);
        // let result = usuariosRepository.deleteForId(usuario.id);
        res.json(usuario);
        // res.send(result);
    }


    
}

module.exports = new homeController;