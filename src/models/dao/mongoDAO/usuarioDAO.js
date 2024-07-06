const mongoose = require('mongoose');
const path = require('path');
const config = require('../../config');
const Usuario = require(path.join(config.MODELOS, 'usuario'));

// Definición del esquema del usuario para Mongoose
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true }
});

const UsuarioModel = mongoose.model('Usuario', usuarioSchema);

class UsuarioDAO {
  async crearUsuario(usuarioData) {
    const usuarioModel = new UsuarioModel(usuarioData);
    const savedUsuario = await usuarioModel.save();
    return this.mapTo(savedUsuario);
  }

    async add(usuarioModel) {
        return await UsuarioModel.create(usuarioModel);
    }

  async obtenerUsuarioPorEmail(email) {
    const usuarioModel = await UsuarioModel.findOne({ email });
    return usuarioModel ? this.mapTo(usuarioModel) : null;
  }

  async actualizarUsuario(id, usuarioData) {
    const updatedUsuario = await UsuarioModel.findByIdAndUpdate(id, usuarioData, { new: true });
    return updatedUsuario ? this.mapTo(updatedUsuario) : null;
  }

  async eliminarUsuario(id) {
    const deletedUsuario = await UsuarioModel.findByIdAndDelete(id);
    return deletedUsuario ? this.mapTo(deletedUsuario) : null;
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