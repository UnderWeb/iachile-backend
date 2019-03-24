'use strict';
import express from 'express';
import { usuario } from '../controllers';

var api = express.Router();

api.post('/landing/subscriptions', usuario.registrar);
api.get('/landing/unique-rut/:rut', usuario.rut);
api.get('/landing/unique-email/:email', usuario.correo);

module.exports = api;
