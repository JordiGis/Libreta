class Usuario {
    constructor(id, nombre, fechaNacimiento, email, contraseña) {
        this.id = id;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.email = email;
        this.contraseña = contraseña;
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

    getContraseña() {
        return this.contraseña;
    }

    validarContraseña(contraseña) {
        // Implementar la lógica de validación de la contraseña
        return this.contraseña === contraseña;
    }


}