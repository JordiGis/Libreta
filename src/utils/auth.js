const path = require('path');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;


const auth = (req, res, next) => {
    const token = req.cookies['token']; // Leer el token de la cookie

    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};


/**
 * Obtiene el ID del usuario del token JWT almacenado en la cookie.
 * @param {Object} cookies - El objeto cookies de la solicitud.
 * @returns {string|null} - El ID del usuario si el token es válido, o null si no lo es.
 */
function getUserIdFromToken(cookies) {
    const token = cookies['token']; // Leer el token de la cookie

    if (!token) {
        return null; // No hay token en la cookie
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET); // Verificar y decodificar el token
        return decoded.userId || null; // Devolver el ID del usuario del payload
    } catch (error) {
        return null; // Token no válido o error al verificar
    }
}

module.exports = {
    auth,
    getUserIdFromToken
};
