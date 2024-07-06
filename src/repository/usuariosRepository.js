const path = require('path');
const config = require('../../config');
const usuariosDAO = require(path.join(config.DAO, 'usuariosDAO'));


class usuariosRepository {
    async add(usuario) {
        return await usuariosDAO.addUsuario(usuario);
    }

    async getForEmail(email) {
        return await usuariosDAO.getUsuarios();
    }
    

    async update(usuario) {
        return await usuariosDAO.updateUsuario(usuario.id, usuario);
    }

    async delete(id) {
        return await usuariosDAO.deleteUsuario(id);
    }
}