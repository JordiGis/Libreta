const mongoose = require('mongoose');
const path = require('path');
const config = require('../../../../config');
const Usuario = require(path.join(config.MODELOS, 'usuario'));

// Definición del esquema del usuario para Mongoose
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tareas: [{ type: mongoose.Schema.Types.ObjectId, ref: config.DAO.modelos.tarea }] // Campo no obligatorio
});

const UsuarioModel = mongoose.model(config.DAO.modelos.usuario, usuarioSchema, config.DAO.modelos.usuario);

class UsuarioDAO {
  async add(usuario) {
    const usuarioModel = new UsuarioModel(usuario);
    await usuarioModel.save();
    return usuarioModel;
  }

  async getForId(id) {
    // hacer un findOne sin el id
    return await UsuarioModel.find();
  }

  async getForEmail(email) {
    return await UsuarioModel.findOne({ email: email });
  }

  async update(usuario) {
    return await UsuarioModel.findByIdAndUpdate(usuario.id, usuario, { new: true })
  }

  async delete(usuario) {
      return await usuariosDAO.delete(usuario.id);
  }

  // Método para mapear un documento de Mongoose a un objeto de dominio
  mapTo(usuarioModel) {
    return new Usuario(
      usuarioModel._id,
      usuarioModel.nombre,
      usuarioModel.email,
      usuarioModel.contraseña
    );
  }

  // Otros métodos relacionados con usuarios
}

module.exports = new UsuarioDAO();