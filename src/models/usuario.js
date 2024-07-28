class Usuario {
    
    constructor(nombre, email, password) {
        this.id = null;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.tareas = [];
    }


    // constructor(id, nombre, fechaNacimiento, email, password) {
    //     this.id = id;
    //     this.nombre = nombre;
    //     this.fechaNacimiento = fechaNacimiento;
    //     this.email = email;
    //     this.password = password;
    // }


    // Getters
    getId() {
        return this.id;
    }

    getNombre() {
        return this.nombre;
    }

    getFechaNacimiento() {
        return this.fechaNacimiento;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getTareas() {
        return this.tareas;
    }

    // Validaciones
    validarPassword(password) {
        // Implementar la lógica de validación de la contraseña
        return this.password === password;
    }

    // Setters
    setId(id) {
        this.id = id;
    }

    setTareas(tareas) {
        this.tareas = tareas;
    }

}

module.exports = Usuario;