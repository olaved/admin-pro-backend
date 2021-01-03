/**
 * 
 * Ruta: /api/usuarios
 */

const { Router } = require('express');
const { getUsuarios, crearUsuarios } = require('../controllers/usuarios');
const { check } = require('express-validator');

const router = Router();


router.get('/', getUsuarios);
router.post('/', [
        //arreglo de midelware
        check('nombre', 'El nombre es obligatorio').not().isEmpty(), //no este vacion
        check('password', 'El pass es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
    ],

    crearUsuarios); //crear usurio


module.exports = router;