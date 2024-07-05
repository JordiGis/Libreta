# Inicio
## Introducción
Servdor Web mediante:

### BackEnd
Servidor Node.Js usando el MVC, Docker para un facil despliege y MongoDB como Base de Datos junto a MongoOs para filtrar las inserciones de datos.

### FrontEnd
Plantillas HTML con CSS + Boocktrap y JS + VUE para para poder proporcionar un buen diseño, escalable y bonito. 

### Objetivo
El objetivo de esta app web es poder gestioner Tareas o Notas para poder organizarse mejor.
La app tambien contara con sistema de logIn teniendo diferentes usuario, y en un futuro poder tener Tareas para Grupos de Usuarios.

## Implementación
### Cloner Repositorio
Clonar el repositorio git clone ...

### Certificados
#### Generar
En la carpeta `certs/` tienen que estar ubicados, esta `mkcer.exe` que sirve para generar certificados, pero no son validos para que sean publicos, solos para pruebas locales.
En el caso de querer otros una opción es OpenSSL.

#### Cambiar la config.js
Teniendolos generados hay que dirigirse a:
```js
/**
 * Nombre de los archivos de certificados
 */
const NAME_KEY = 'local-key.pem';
const NAME_CERT = 'local.pem';
```
Cambiar los nombre en caso de ser necesario.

## Edición de config.js
Desde ese archivo se puede modificar la estructura de fichero, ya que todo el proyecto recojer las rutas del objeto cofig que se exporta.
Tambien se puede cambiar la url base, en el caso por defecto es `/`, pero se puede cambiar en la siguiente liena:
```js
/**
 * URL raíz
 */
const URL_RAIZ = '/';
```

# Edición
## Creación de nuevos EndPoints
Para hacer nuevos, primero hay que ver la estructura que esta desarollada.
Lo primero es que `app.js` delega toda la gastión de las rutas en `gestorRutas.js`.
En este archivo estaran todas las rutas principales, es decir `/home`, `/user`, pero delegara el resto de logica a los controladores que se encargan de ese Modulo.

Es decir que si le llega una ruta `/home/config`, como la dirección principal es `/home` se ira al controlador `homeController.js` en el metodo index, este metodo es obligarorio para los controladores, ya que es el que se encargara de gestionar las rutas internas del controlador.
