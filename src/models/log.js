
const type = { 
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    CREATE_USER: 'CREATE_USER',
    CREATE_TASK: 'CREATE_TASK',
    UPDATE_USER: 'UPDATE_USER',
    UPDATE_TASK: 'UPDATE_TASK',
    DELETE_TASK: 'DELETE_TASK',
    ERROR: 'ERROR'
};

const status = {
    SUCCESS: 'SUCCESS',
    FAILED: 'FAILED'
};

class Log {
    
    constructor(usuario, type, fecha, status, content) {
        this.id = null;
        this.usuario = usuario;
        this.type = type;
        this.fecha = fecha;
        this.status = status;
        this.content = content;
    }


    // Getters
    getId() {
        return this.id;
    }

    getUsuario() {
        return this.usuario;
    }

    getType() {
        return this.type;
    }

    getFecha() {
        return this.fecha;
    }

    getStatus() {
        return this.status;
    }

    getContent() {
        return this.content;
    }

    // Setters
    setId(id) {
        this.id = id;
    }

    setStatus(status) {
        this.status = status;
    }

}


module.exports = { Log, type, status };