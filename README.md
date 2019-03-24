# Prueba técnica Backend Inteligencia Artificial Chile

Este proyecto ha sido generado en Nodejs versión 10.15.1, express versión 4.16.4, AWS DynamoDB y Dynamoose versión 1.7.2 como ORM.

## Instalación

1. Se debe descargar la aplicación mediante el siguiente comando:

git clone https://github.com/UnderWeb/iachile-backend.git

2. Una vez descargado, hay que dirigirse al directorio o carpeta donde se encuentra la aplicación para proceder a instalar las librerías de dependencias, ejecutando el siguiente comando:

npm install

## Servidor de desarrollo

Se debe arrancar npm start para levantar el servidor de desarrollo. El puerto usado para la API Rest es el 3000. Se ha utilizado nodemon versión 1.18.10, con lo cual la aplicación se cargará automáticamente si se realiza algún cambio.

## Servidor de producción

Esta Api se encuentra alojada en AWS EC2 utilizando PM2 versión 3.4.0, el cual es un administrador de procesos en producción para Nodejs.