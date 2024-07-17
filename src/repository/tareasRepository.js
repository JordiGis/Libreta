const path = require('path');
require('dotenv').config();
const config = require('/app/config.js');
const tareaDAO = require(path.join(config.DAO.path, 'tareaDAO'));


class tareasRepository {
    async add(tarea) {
        return await tareaDAO.add(tarea);
    }

    async getForId(id) {
        return await tareaDAO.getForId(id);
    }

    async getForUser(usuario) {
        return await tareaDAO.getForUser(usuario);
    }

    async update(tarea) {
        return await tareaDAO.update(tarea);
    }

    async delete(tarea) {
        return await tareaDAO.delete(tarea.id);
    }

    async deleteForId(id) {
        return await tareaDAO.delete(id);
    }


    ///////////////////////
    

}

module.exports = new tareasRepository;