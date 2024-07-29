const path = require('path');
require('dotenv').config();
const config = require('/app/config.js');
const { get } = require('http');
const logDAO = require(path.join(config.DAO.path, 'logDAO'));


class usuariosRepository {
    /**
     * Necesita un objeto de log para añadirlo
     * @param {*} log 
     * @returns 
     */
    async add(log) {
        console.log(log);
        return await logDAO.add(log);
    }

    /**
     * Necesita un id para buscar
     * @param {*} id 
     * @returns 
     */
    async getForId(id) {
        return await logDAO.getForId(id);
    }

    /**
     * Necesita un objeto usuario para buscar
     * @param {*} usuario 
     * @returns 
     */
    async getForUser(usuario) {
        return await logDAO.getForUser(usuario);
    }

    /**
     * Necesita un objeto log para eliminarlo
     * @param {*} log 
     * @returns 
     */
    async delete(log) {
        return await logDAO.delete(log.id);
    }

}

module.exports = new usuariosRepository;