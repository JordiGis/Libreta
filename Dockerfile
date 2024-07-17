# Dockerfile
FROM node:16

# Crear directorio de la aplicación
WORKDIR /app

# Instalar las dependencias de la aplicación
COPY package*.json ./
RUN npm install

# Copiar el código de la aplicación
COPY . .

# Definir la variable de entorno en el contenedor
ENV MONGODB_URI=$MONGODB_URI
ENV PATH_CONFIG=$PATH_CONFIG

# Exponer el puerto
EXPOSE 443

# Comando para correr la aplicación
CMD [ "node", "app.js" ]
