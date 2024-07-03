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

#### Cambiar la app.js
Teniendolos generados hay que dirigirse a:
```js
/**
 * Nombre de los archivos de certificados
 */
const key = 'server.key';
const cert = 'server.csr';
```
Cambiar los nombre en caso de ser necesario.
