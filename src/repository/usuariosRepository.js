const path = require('path');
const config = require('../../config');
const { get } = require('http');
const usuarioDAO = require(path.join(config.DAO.path, 'usuarioDAO'));
const Usuario = require(path.join(config.MODELOS, 'usuario'));


class usuariosRepository {
    /**
     * Necesita un objeto de usuario para añadirlo
     * @param {*} usuario 
     * @returns 
     */
    async add(usuario) {
        console.log(usuario);
        return await usuarioDAO.add(usuario);
    }

    /**
     * Necesita un id para buscar un usuario
     * @param {*} id 
     * @returns 
     */
    async getForId(id) {
        return await usuarioDAO.getForId(id);
    }

    /**
     * Necesita un email para buscar un usuario
     * si no se puede crear el usuario retornana null
     * @param {*} email 
     * @returns 
     */
    async getForEmail(email) {
        return await usuarioDAO.getForEmail(email);
    }

    /**
     * Necesita un objeto de usuario para sacar el id y actualizarlo
     * @param {*} usuario 
     * @returns 
     */
    async update(usuario) {
        if (usuario.id == null) {
            let u = await this.getForEmail(usuario.email);
            usuario.id = u.id;
        }
        return await usuarioDAO.update(usuario);
    }

    /**
     * Necesita un objeto de usuario para sacar el id y eliminarlo
     * @param {*} usuario 
     * @returns 
     */
    async delete(usuario) {
        return await usuarioDAO.delete(usuario.id);
    }

    /**
     * Necesita un id para eliminar un usuario
     * @param {*} id
     * @returns
     */
    async deleteForId(id) {
        return await usuarioDAO.delete(id);
    }
}

module.exports = new usuariosRepository;