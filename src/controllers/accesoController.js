require('dotenv').config();
const path = require('path');
const config = require('/app/config.js');
const { log } = require('console');
const ClassController = require(path.join(config.INTERFACES, 'controller'));
const Usuario = require(path.join(config.MODELOS, 'usuario'));
const userRepository = require(path.join(config.REPOSITORY, 'usuariosRepository'));
const { Log, type, status } = require(path.join(config.MODELOS, 'log'));
const logRepository = require(path.join(config.REPOSITORY, 'logRepository'));

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
        // if (!usuario.nombre) {
        //     usuario.nombre = '';
        // }
        if (req.baseUrl === '/login') {
            // Lógica para iniciar sesión
            console.log('Iniciar sesión');
            const dbUser = await userRepository.getForEmail(usuario.email);
            if (dbUser === null) {
                console.log('Usuario no encontrado');
                res.send('Usuario no encontrado');
                return;
            }
            // Validar la contraseña tendra que ser un hash, y se tendra que comparar si se han hecho otro intentos de logIn antes
            if (dbUser.password === usuario.password) {
                console.log('Usuario autenticado');
                logRepository.add(new Log(dbUser, type.LOGIN, new Date(), status.SUCCESS, { report: 'Usuario autenticado' }));
                res.send(`Usuario autenticado: ${JSON.stringify(dbUser)}`);
            } else {
                console.log('Contraseña incorrecta');
                logRepository.add(new Log(dbUser, type.LOGIN, new Date(), status.FAILED, { report: 'Contraseña incorrecta' }));
                let paramas = {
                    actionLogIn: dominio+"login",
                    actionSignUp: dominio+"signUp",
                    email: dbUser.email,
                    accion: "login",
                    error: 'Contraseña incorrecta'
                };
                res.render(path.join(config.VISTAS, 'acceso'), { paramas });
            }
            
        } else if (req.baseUrl === '/signUp') {
            // Lógica para registrar un nuevo usuario
            if (usuario.password !== body.passwordConf) {
                console.log('Las contraseñas no coinciden');
                res.send('Las contraseñas no coinciden');
                return;
            }
            console.log('Registrar nuevo usuario');
            const dbUser = await userRepository.getForEmail(usuario.email);
            if (dbUser) {
                console.log('El usuario ya existe');
                res.send('El usuario ya existe');
                return;
            }
            const newUser = await userRepository.add(usuario);
            if (newUser.errors === null) {
                console.log('Usuario registrado');
                logRepository.add(new Log(newUser, type.CREATE_USER, new Date(), status.SUCCESS, { report: 'Usuario registrado' }));
                res.send(`Usuario registrado: ${JSON.stringify(newUser)}`);
            } else {
                console.log('Error al registrar el usuario');
                newUser.errors = JSON.stringify(newUser.errors);
                logRepository.add(new Log(null, type.CREATE_USER, new Date(), status.FAILED, { report: 'Error al registrar el usuario', error: newUser.message }));
                res.send('Error al registrar el usuario');
            }
        }
    }

    


    
}

module.exports = new accesoController;