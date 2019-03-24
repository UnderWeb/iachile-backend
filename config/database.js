'use strict';

// Importa la librería del ORM Dynamoose.
import dynamoose from 'dynamoose';
var AWS = require('aws-sdk');

// Importa las constantes del sistema referente a la conexión a la base de datos.
import { DB_ACCESS_KEY, DB_SECRET_KEY, DB_REGION } from './environment';

/**
 * Instancia DynamoDB.
 */
const connection = () => {
    dynamoose.AWS.config.update({
        accessKeyId: DB_ACCESS_KEY,
        secretAccessKey: DB_SECRET_KEY,
        region: DB_REGION
    },error => {
        console.log(error);
    });
    /*dynamoose.setDefaults({
      prefix: 'example-',
      suffix: ''
    });
    dynamoose.local(); // This defaults to "http://localhost:8000"*/
}

/**
 * Exportar conexión.
 */
module.exports = connection;
