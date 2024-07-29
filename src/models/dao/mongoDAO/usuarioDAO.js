const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const config = require('/app/config.js');
const Usuario = require(path.join(config.MODELOS, 'usuario'));

// Definición del esquema del usuario para Mongoose
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: [true, "El nombre es necesario"] },
  email: { type: String, required: [true, "El email es necesario"], unique: [true, "El ya esta registrado"] },
  password: { type: String, required: [true, "La contraseña es necesario"] },
  tareas: [{ type: mongoose.Schema.Types.ObjectId, ref: config.DAO.modelos.tarea }] // Campo no obligatorio
});

usuarioSchema.index({ email: 1 }, { unique: true });
const UsuarioModel = mongoose.model(config.DAO.modelos.usuario, usuarioSchema, config.DAO.modelos.usuario);

class UsuarioDAO {
  async add(usuario) {
    // const usuarioModel = new UsuarioModel(usuario);
    try {
      await UsuarioModel.create({
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password,
        tareas: usuario.tareas
      });
      return this.getForEmail(usuario.email);
    } catch (error) {
      return error;
    }
  }

  async getForId(id) {
    let usuarioModel = await UsuarioModel.findOne({ _id: id }).exec();
    return this.mapTo(usuarioModel);
  }

  async getForEmail(email) {
    let usuarioModel = await UsuarioModel.findOne({ email: email }).exec();;
    return this.mapTo(usuarioModel);
  }

  async update(usuario) {
    return await UsuarioModel.updateOne(
      { _id: usuario.id },
      {
        $set: {
          "nombre": usuario.nombre,
          "fechaNacimiento": usuario.fechaNacimiento,
          "password": usuario.password,
          "tareas": usuario.tareas
        },
      }
    );

  }

  async delete(id) {
    return await UsuarioModel.deleteOne({ _id: id });
  }

  // Método para mapear un documento de Mongoose a un objeto de dominio
  mapTo(usuarioModel) {
    if (!usuarioModel) {
      return null;
    }
    let u = new Usuario(
      usuarioModel.nombre,
      usuarioModel.email,
      usuarioModel.password
    );
    u.setId(usuarioModel.id);
    u.setTareas(usuarioModel.tareas);
    return u;
  }

  // Otros métodos relacionados con usuarios
}

module.exports = new UsuarioDAO();