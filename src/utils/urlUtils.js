function getRuta(ruta) {
    let rutas = ruta.split("/");
    if (rutas.length != 1) {
        rutas.shift();
    }
    return rutas[0];
}


function getSubRuta(ruta) {
    let rutas = ruta.split("/");
    if (rutas.length != 1) {
        rutas.shift();
    }
    return rutas[1];
}

const urlUtils = {
    getRuta,
    getSubRuta
};

module.exports = urlUtils;