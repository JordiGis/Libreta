# Usa una imagen de Node.js como base
FROM node:20

# Crear directorio de la aplicación
RUN mkdir -p /app

# Crear directorio de la aplicación
WORKDIR /app

# Copia los archivos de tu proyecto al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todos los archivos al directorio de trabajo (puedes ajustar esto según tu estructura de carpetas)
COPY . .

# Expone el puerto 3000 (o el puerto que uses para tu aplicación)
EXPOSE 443 9229

# Comando para ejecutar la aplicación
CMD ["npm", "dev"]
