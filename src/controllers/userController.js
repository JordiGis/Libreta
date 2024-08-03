const path = require('path');
const config = require('/app/config.js');
const { name } = require('ejs');
const Usuario = require(path.join(config.MODELOS, 'usuario'));
const usuariosRepository = require(path.join(config.REPOSITORY, 'usuariosRepository'));
const USER = path.join(config.VISTAS, 'user');
const { getUserIdFromToken } = require(path.join(config.UTILS, 'auth'));

class userController {
    async raiz(req, res) {
        // let usuario = new Usuario("Juan", new Date(), "juan@gestor.es", "1234");
        // let result = await usuariosRepository.add(usuario);
        // res.json(result);
        // console.log(result);
        const userId = getUserIdFromToken(req.cookies);
        const usuario = await usuariosRepository.getForId(userId);
        const params = {
            titulo: "Home",
            mensaje: "¡Hola desde la ruta /home/raiz!",
            name: usuario.nombre,
            
        };
        res.render(path.join(USER, 'index'), { params });
    }
   
}

module.exports = new userController;