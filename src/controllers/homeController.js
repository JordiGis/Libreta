const path = require('path');
const config = require('../../config');
const urlUtils = require(path.join(config.UTILS, 'urlUtils'));

class homeController {
    ruta = '/home/:path?';

    getRuta() {
        return this.ruta;
    }

    index(req, res) {
        const subruta = urlUtils.getSubRuta(req.path);
        // Lógica para determinar la acción basada en la sub-ruta
        switch (subruta) {
            case 'info':
                return info(req, res);
            // Añadir más casos según sea necesario para otras sub-rutas de /home
            default:
                // Acción por defecto, como mostrar la página principal de /home
                res.send('homa raiz');
        }
    }


    
}


function info(req, res) {
    res.send('Información sobre la página de about');
}
module.exports = homeController;