const mongoose = require('mongoose');
const path = require('path');
const config = require('/app/config.js');
const { Log, type, status } = require(path.join(config.MODELOS, 'log'));
// const Log = require(path.join(config.MODELOS, 'log'));

// Definición del esquema del contenido del log para Mongoose
const contentSchema = new mongoose.Schema({
    report: { type: String, required: true },
    object: { type: Object, required: false },
    error: { type: String, required: false }
});

// Definición del esquema del log para Mongoose
const logSchema = new mongoose.Schema({
    usuario: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Usuario', 
        required: function() {
            return this.status !== status.FAILED;
        }
     },
    type: { type: String, enum: Object.values(type), required: true },
    fecha: { type: Date, default: Date.now, required: true },
    status: { type: String, enum: Object.values(status), required: true },
    content: { type: contentSchema, required: true }
});

logSchema.index({ usuario: 1 }, { unique: false });
logSchema.index({ type: 1 }, { unique: false });
logSchema.index({ status: 1 }, { unique: false });
const logModel = mongoose.model(config.DAO.modelos.log, logSchema, config.DAO.modelos.log);

class LogDAO {
    async add(log) {

        await logModel.create({
            usuario: (log.usuario === null)? null: log.usuario.id,
            type: log.type,
            fecha: log.fecha,
            status: log.status,
            content: log.content
        });
        return this.mapTo(logModel);
    }

    async getForId(id) {
        return this.mapTo(await logModel.findOne({ _id: id }).exec());
    }

    async getForUser(usuario) {
        return this.mapTo(await logModel.findMany({ usuario: usuario.id }).exec());
    }

    async delete(id) {
        return await logModel.updateOne(
            { _id: ObjectId(id) },
            { $set: { eliminada: true } }
        );
    }

    // Método para mapear un documento de Mongoose a un objeto de dominio
    mapTo(logModel) {
        return new Log(
            logModel._id,
            logModel.usuario,
            logModel.type,
            logModel.fecha,
            logModel.status,
            logModel.content
        );
    }
}

module.exports = new LogDAO();