const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const config = require(process.env.PATH_CONFIG);
const Tarea = require(path.join(config.MODELOS, 'tarea'));

// Definición del esquema del usuario para Mongoose
const tareaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    fechaCreacion: { type: Date, required: true },
    realizado: { type: Boolean, required: true },
    eliminada: { type: Boolean, required: true },
    fechaRealizacion: { type: Date },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: config.DAO.modelos.usuario, required: true }
});

const TareaModel = mongoose.model(config.DAO.modelos.tarea, tareaSchema, config.DAO.modelos.tarea);

class TareaDAO {
    async add(tarea) {
        const TareaModel = new TareaModel(usuario);
        await TareaModel.save();
        return TareaModel;
    }

    async getForId(id) {
        return await TareaModel.findOne({ _id: id }).exec();
    }

    async getForUser(usuario) {
        return await TareaModel.findMany({ usuario: usuario.id }).exec();
    }

    async update(tarea) {
        return await TareaModel.findByIdAndUpdate(tarea.id, tarea, { new: true })
    }

    async delete(id) {
        return await TareaModel.updateOne(
            { _id: ObjectId(id) },
            { $set: { eliminada: true } }
        );
    }

    // Método para mapear un documento de Mongoose a un objeto de dominio
    mapTo(TareaModel) {
        return new Tarea(
            TareaModel._id,
            TareaModel.titulo,
            TareaModel.descripcion,
            TareaModel.fechaCreacion,
            TareaModel.realizado,
            TareaModel.eliminada,
            TareaModel.fechaRealizacion,
            TareaModel.usuario
        );
    }

    // Otros métodos relacionados con usuarios
}

module.exports = new TareaDAO();