'use strict';

// Carga las variables en el archivo process.env
import * as dotenv from 'dotenv';
// dotenv.load({ path: '.env' });
dotenv.config({ path: '.env' });

// Constantes de la aplicación.
const SECRET = process.env.APP_KEY;
const SERVER_PORT = process.env.SERVER_PORT;

const DB_ACCESS_KEY = process.env.AWS_ACCESS_KEY_ID
const DB_SECRET_KEY = process.env.AWS_SECRET_ACCESS_KEY
const DB_REGION = process.env.AWS_REGION

// Exportación de las constantes de la aplicación.
export {
    SECRET,
    SERVER_PORT,
    DB_ACCESS_KEY,
    DB_SECRET_KEY,
    DB_REGION
};
