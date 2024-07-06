class Usuario {
    constructor(id, titulo, descripcion, fechaCreacion, realizado, eliminada, fechaRealizacion, usuario){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.realizado = realizado;
        this.eliminada = eliminada;
        this.fechaRealizacion = fechaRealizacion;
        this.usuario = usuario;
    }

    // Getters
    getId() {
        return this.id;
    }

    getTitulo() {
        return this.titulo;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getFechaCreacion() {
        return this.fechaCreacion;
    }

    getRealizado() {
        return this.realizado;
    }

    getEliminada() {
        return this.eliminada;
    }

    getFechaRealizacion() {
        return this.fechaRealizacion;
    }

    getUsuario() {
        return this.usuario;
    }



}