const path = require('path');
const config = require('../../config');
const usuarioDAO = require(path.join(config.DAO.path, 'usuarioDAO'));


class usuariosRepository {
    async add(usuario) {
        return await usuarioDAO.add(usuario);
    }

    async getForId(id) {
        return await usuarioDAO.getForId(id);
    }

    async getForEmail(email) {
        return await usuarioDAO.getForEmail(email);
    }

    async update(usuario) {
        return await usuarioDAO.update(usuario);
    }

    async delete(usuario) {
        return await usuarioDAO.delete(usuario.id);
    }

    async deleteForId(id) {
        return await usuarioDAO.delete(id);
    }
}

module.exports = usuariosRepository;