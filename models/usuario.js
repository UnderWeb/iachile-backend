'use strict';
import dynamoose from 'dynamoose';
const Schema = dynamoose.Schema;
var uuid = require('uuid');

const UsuarioSchema = new Schema({
    id: {
        type: String,
        required: true,
        trim: true,
        default: uuid.v1()
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        index: { unique: true },
        lowercase: true,
        trim: true
    },
    rut: {
        type: String,
        required: true,
        index: { unique: true },
        uppercase: true,
        trim: true
    }
});

const Usuario = dynamoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;
