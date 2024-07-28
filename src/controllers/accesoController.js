require('dotenv').config();
const path = require('path');
const config = require('/app/config.js');
const ClassController = require(path.join(config.INTERFACES, 'controller'));
const Usuario = require(path.join(config.MODELOS, 'usuario'));
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
        const usuario = new Usuario(body.name, body.email, body.password);
        if (!usuario.nombre) {
            usuario.nombre = '';
        }
        if (req.baseUrl === '/login') {
            // Lógica para iniciar sesión
            console.log('Iniciar sesión');
            const dbUser = await repositoryUser.getForEmail(usuario.email);
            if (dbUser) {
                // Validar la contraseña tendra que ser un hash
                if (dbUser.password === usuario.password) {
                    console.log('Usuario autenticado');
                    res.send(`Usuario autenticado: ${JSON.stringify(dbUser)}`);
                } else {
                    console.log('Contraseña incorrecta');
                    res.send('Contraseña incorrecta');
                }
            } else {
                console.log('Usuario no encontrado');
                res.send('Usuario no encontrado');
            }
            
        } else if (req.baseUrl === '/signUp') {
            // Lógica para registrar un nuevo usuario
            if (usuario.password !== body.passwordConf) {
                console.log('Las contraseñas no coinciden');
                res.send('Las contraseñas no coinciden');
                return;
            }
            console.log('Registrar nuevo usuario');
            const dbUser = await repositoryUser.getForEmail(usuario.email);
            if (dbUser) {
                console.log('El usuario ya existe');
                res.send('El usuario ya existe');
                return;
            }
            const newUser = await repositoryUser.add(usuario);
            if (newUser) {
                console.log('Usuario registrado');
                res.send(`Usuario registrado: ${JSON.stringify(newUser)}`);
            } else {
                console.log('Error al registrar el usuario');
                res.send('Error al registrar el usuario');
            }
        }
    }

    


    
}

module.exports = new accesoController;