const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const config = require(process.env.PATH_CONFIG);
const Usuario = require(path.join(config.MODELOS, 'usuario'));

// Definición del esquema del usuario para Mongoose
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tareas: [{ type: mongoose.Schema.Types.ObjectId, ref: config.DAO.modelos.tarea }] // Campo no obligatorio
});

usuarioSchema.index({ email: 1 }, { unique: true });
const UsuarioModel = mongoose.model(config.DAO.modelos.usuario, usuarioSchema, config.DAO.modelos.usuario);

class UsuarioDAO {
  async add(usuario) {
    // const usuarioModel = new UsuarioModel(usuario);
    const usuarioModel = new UsuarioModel({
      nombre: usuario.nombre,
      fechaNacimiento: usuario.fechaNacimiento,
      email: usuario.email,
      password: usuario.password,
      tareas: usuario.tareas
    });
    try {
      await usuarioModel.save();
      return this.mapTo(usuarioModel);
    } catch (error) {
      if (error.code === 11000) {
        // Código de error 11000 indica un error de duplicado en MongoDB
        return null;
      }
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
    let u = new Usuario(
      usuarioModel.nombre,
      usuarioModel.fechaNacimiento,
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