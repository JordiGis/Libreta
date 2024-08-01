const bcrypt = require('bcryptjs');
require('dotenv').config();
const saltRounds = parseInt(process.env.HASH_ROUNDS, 10);

class Password {
    constructor(password) {
        this.value = this.generate(password);
    }

    async get() {
        // Esperar la resolución del hash y devolverlo
        return await this.value;
    }

    async generate(password) {
        // Generar el salt con el número de rondas especificado
        const salt = await bcrypt.genSalt(saltRounds);
        // Hashear la contraseña con el salt generado
        return bcrypt.hash(password, salt);
    }
}


async function comparePass(hashedPassword, password) {
    // Comparar la contraseña proporcionada con el hash almacenado
    try{
        return bcrypt.compare(password, hashedPassword);
    }catch(err){
        console.log(err);
        return false;
    }
}



module.exports = {
    Password,
    comparePass
};
    