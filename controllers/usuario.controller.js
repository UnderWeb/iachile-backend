'use strict';
import { Usuario } from '../models';

// Objeto usuario.
var user = new Usuario();

// Objeto a exportar a las rutas.
const usuarioCtrl = {};

/**
 * Registro de usuarios.
 */
usuarioCtrl.registrar = async (request, response, next) => {
    // Obtiene los parámentos de registro.
    const params = request.body;

    // Comprueba el ingreso de los datos mínimos.
    if (params.nombre && params.telefono && params.correo && params.rut) {
        // Asigna los valores al objeto usuario.
        user.nombre = params.nombre;
        user.telefono = params.telefono;
        user.correo = params.correo;
        user.rut = params.rut;

        // Realiza el guardado del usuario
        user.save((err, userStore) => {
            if (err) {
                console.log(err);
                response.status(500).send({mensaje: "No se ha podido guardar al usuario"});
            } else {
                if (!userStore) {
                    response.status(404).send({Status: "NOOK"});
                } else {
                    console.log(userStore);
                    response.status(200).send({data: userStore});
                }
            }
        });
        // Comprueba la existencia del usuario mediante su correo.
        // Esto mismo se puede replicar con la identificación de la persona.
        /*await Usuario.scan('correo').eq(user.correo).exec((error, data) => {
            if (error) {
                response.status(500).send({mensaje: "No se ha podido comprobar el correo electrónico"});
            } else {
                if (data.count == 0) {
                    user.save((err, userStore) => {
                        if (err) {
                            console.log(err);
                            response.status(500).send({mensaje: "No se ha podido guardar al usuario"});
                        } else {
                            if (!userStore) {
                                response.status(404).send({Status: "NOOK"});
                            } else {
                                console.log(userStore);
                                response.status(200).send({data: userStore});
                            }
                        }
                    });
                } else {
                    response.status(200).send({mensaje: "El correo electrónico ya se encuentra registrado"});
                }
            }
        });*/
    } else {
        response.status(200).send({Status: "NOOK"});
    }
};

/**
 * Comprueba la existencia del correo electrónico.
 */
usuarioCtrl.correo = async (request, response, next) => {
    // Obtiene los parámentos de validación.
    const params = request.params;

    // Comprueba el ingreso de los datos mínimos.
    if (params.email) {
        // Asigna el valor del correo.
        const email = params.email;

        // Comprueba la existencia del usuario mediante su correo.
        await Usuario.scan('correo').eq(email).exec((error, data) => {
            if (error) {
                console.log(error);
                response.status(500).send({error: "No se ha podido comprobar el correo electrónico"});
            } else {
                if (data.count > 0) {
                    response.status(200).send({valid: true});
                } else {
                    response.status(200).send({valid: null});
                }
            }
        });
    } else {
        response.status(200).send({valid: null});
    }
};

/**
 * Comprueba la existencia del rut.
 */
usuarioCtrl.rut = async (request, response, next) => {
    console.log(request);
    // Obtiene los parámentos de validación.
    const params = request.params;

    // Comprueba el ingreso de los datos mínimos.
    if (params.rut) {
        // Asigna el valor del rut.
        const rut = params.rut.toUpperCase();

        // Comprueba la existencia del usuario mediante su rut.
        await Usuario.scan('rut').eq(rut).exec((error, data) => {console.log(data.count)
            if (error) {
                console.log(error);
                response.status(500).send({error: "No se ha podido comprobar el rut"});
            } else {
                if (data.count > 0) {
                    response.status(200).send({valid: true});
                } else {
                    response.status(200).send({valid: null});
                }
            }
        });
    } else {
        response.status(200).send({valid: null});
    }
};

// Exporta el objeto controller del usuario.
module.exports = usuarioCtrl;
