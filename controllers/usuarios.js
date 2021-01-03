const { response } = require('express');
const { validationResult } = require('express-validator');

const Usuario = require('../models/usuario')




const getUsuarios = async(req, resp) => {


    const usuarios = await Usuario.find({}, 'nombre email google id rol');


    resp.json({
        ok: true,
        usuarios
    });
}


const crearUsuarios = async(req, res = response) => {

    const { email, password, nombre } = req.body;
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }

    try {

        const existeEmail = Usuario.findOne({ email });

        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya esta registrado'
            });
        }

        const usuario = new Usuario(req.body);

        //grabar en la BD
        await usuario.save();

        resp.json({
            ok: true,
            usuario
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });

    }


}


module.exports = {
    getUsuarios,
    crearUsuarios,
}