const path = require('path');
const config = require('/app/config.js');
const { log } = require('console');
const ClassController = require(path.join(config.INTERFACES, 'controller'));
const Usuario = require(path.join(config.MODELOS, 'usuario'));
const { Password, comparePass } = require(path.join(config.MODELOS, 'password'));
const userRepository = require(path.join(config.REPOSITORY, 'usuariosRepository'));
const { Log, type, status } = require(path.join(config.MODELOS, 'log'));
const logRepository = require(path.join(config.REPOSITORY, 'logRepository'));
const ACCESO = path.join(config.VISTAS, 'acceso');

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
        res.render(path.join(ACCESO, 'index'), { paramas });
    }

    async postRaiz(req, res) {
        const body = req.body;
        const usuario =  new Usuario(body.name, body.email, await new Password(body.password).get());
        if (req.baseUrl === '/login') {
            // Lógica para iniciar sesión
            console.log('Iniciar sesión');
            const dbUser = await userRepository.getForName(usuario.nombre);
            if (dbUser === null) {
                console.log('Usuario no encontrado');
                res.send('Usuario no encontrado');
                return;
            }
            // Validar la contraseña tendra que ser un hash, y se tendra que comparar si se han hecho otro intentos de logIn antes
            if (await comparePass(dbUser.password, body.password)) {
                console.log('Usuario autenticado');
                logRepository.add(new Log(dbUser, type.LOGIN, new Date(), status.SUCCESS, { report: 'Usuario autenticado' }));
                res.send(`Usuario autenticado: ${JSON.stringify(dbUser)}`);
            } else {
                console.log('Contraseña incorrecta');
                logRepository.add(new Log(dbUser, type.LOGIN, new Date(), status.FAILED, { report: 'Contraseña incorrecta' }));
                let paramas = {
                    actionLogIn: dominio+"login",
                    actionSignUp: dominio+"signUp",
                    name: dbUser.nombre,
                    accion: "login",
                    error: 'Contraseña incorrecta'
                };
                res.render(path.join(ACCESO, 'index'), { paramas });
            }
            
        } 
        
        if (req.baseUrl === '/signUp') {
            // Lógica para registrar un nuevo usuario
            if (body.password != body.passwordConf) {
                console.log('Las contraseñas no coinciden');
                res.send('Las contraseñas no coinciden');
                return;
            }
            const dbUser = await userRepository.getForName(usuario.nombre);
            if (dbUser != null) {
                console.log('El usuario ya existe');
                res.send('El usuario ya existe');
                return;
            }
            console.log('Registrar nuevo usuario');
            const newUser = await userRepository.add(usuario);
            
            // Validar si hay errores
            if (newUser.errors != null) {
                console.log('Error al registrar el usuario');
                newUser.errors = JSON.stringify(newUser.errors);
                logRepository.add(new Log(null, type.CREATE_USER, new Date(), status.FAILED, { report: 'Error al registrar el usuario', error: newUser.message }));
                res.send('Error al registrar el usuario');
            }

            // Nuevo usuario
            console.log('Usuario registrado');
            logRepository.add(new Log(newUser, type.CREATE_USER, new Date(), status.SUCCESS, { report: 'Usuario registrado' }));
            res.send(`Usuario registrado: ${JSON.stringify(newUser)}`);
        }
    }

    


    
}

module.exports = new accesoController;