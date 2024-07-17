const path = require('path');
require('dotenv').config();
const config = require('/app/config.js');
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

    async info(req, res) {
        let usuario = await usuariosRepository.getForEmail("juan@gestor.es");
        console.log(usuario);
        // let result = usuariosRepository.deleteForId(usuario.id);
        res.json(usuario);


        // let datosParaVue = {
        //     titulo: "Información",
        //     mensaje: "¡Hola desde la ruta /home/info!"
        // };
        // res.render(path.join(config.VISTAS, 'index'), { datosParaVue });
    }

    async up(req, res) {
        let usuario = new Usuario("Pepito", new Date(), "juan@gestor.es", "1234");
        console.log(usuario);
        let result = usuariosRepository.update(usuario);
        // res.json(usuario);
        res.send(result);
    }
    
    async del(req, res) {
        let usuario = await usuariosRepository.getForEmail("juan@gestor.es");
        console.log(usuario);
        let result = usuariosRepository.deleteForId(usuario.id);
        // res.json(usuario);
        res.send(result);
    }


    
}

module.exports = new homeController;