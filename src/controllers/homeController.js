const path = require('path');
const config = require('/app/config.js');
const Usuario = require(path.join(config.MODELOS, 'usuario'));
const usuariosRepository = require(path.join(config.REPOSITORY, 'usuariosRepository'));
const HOME = path.join(config.VISTAS, 'home');

class homeController {
    async raiz(req, res) {
        // let usuario = new Usuario("Juan", new Date(), "juan@gestor.es", "1234");
        // let result = await usuariosRepository.add(usuario);
        // res.json(result);
        // console.log(result);
        const datosParaVue = {
            titulo: "Home",
            mensaje: "¡Hola desde la ruta /home/raiz!"
        };
        res.render(path.join(HOME, 'index'), { datosParaVue });
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