/**
 * @interface
 */
class controller {
    ruta = '/'; // ruta por defecto

    getRuta() {
        return this.ruta;
    }

    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    index() {throw new Error('Método no implementado');} // metodo obligatorio para el funcionamiento de controladores
}

module.exports = controller;