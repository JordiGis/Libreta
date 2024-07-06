class Usuario {
    constructor(id, nombre, fechaNacimiento, email, password) {
        this.id = id;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.email = email;
        this.password = password;
    }


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

    validarPassword(password) {
        // Implementar la lógica de validación de la contraseña
        return this.password === password;
    }


}