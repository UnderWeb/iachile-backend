'use strict';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Carga de rutas.
const usuario_routes = require('../routes/usuario');

app.use(bodyParser.urlencoded({extended: false}));

// Convierte lo que trae el body a json.
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-Width, Content-Type, Accept, Access-Control-Allow-Request-Method');
    response.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.header('Allow', 'POST, OPTIONS');
    next();
});

// Rutas base * (api es prefijo).
app.use('/api', usuario_routes);

// Exportación del módulo.
module.exports = app;
