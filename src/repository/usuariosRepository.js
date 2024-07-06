const path = require('path');
const config = require('../../config');
const usuariosDAO = require(path.join(config.DAO.path, 'usuarioDAO'));


class usuariosRepository {
    async add(usuario) {
        return await usuariosDAO.add(usuario);
    }

    async getForId(id) {
        return await usuariosDAO.getForId(id);
    }

    async getForEmail(email) {
        return await usuariosDAO.getForEmail(email);
    }

    async update(usuario) {
        return await usuariosDAO.update(usuario);
    }

    async delete(usuario) {
        return await usuariosDAO.delete(usuario.id);
    }

    async deleteForId(id) {
        return await usuariosDAO.delete(id);
    }
}

module.exports = usuariosRepository;