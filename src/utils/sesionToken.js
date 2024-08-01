const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.JWT_SECRET;

class SesionToken {
    constructor() { }

    generateToken() {
        return jwt.sign({ id: user.id }, secretKey, { expiresIn: 43200 }); // Expira en 12 horas
    }

    verifyToken(token) {
        if (!token) {
            return false;
        }
        let id;
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return false;
            }

            // Si el token es válido, guarda el id de usuario para su uso posterior
            id = decoded.id;
            next();
        });
        return id;
    }
}