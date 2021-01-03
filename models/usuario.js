const { Schema, model } = require('mongoose');


const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        default: 'USER ROLE'
    },
    google: {
        type: String,
        default: true
    },

});

//Configuracion para fines visuales cambiar _id por uid
UsuarioSchema.method('toJSON', function() {
    const { __var, _id, ...object } = this.toObject();

    object.uid = _id;
    return object;
})

module.exports = model('Usuario', UsuarioSchema);