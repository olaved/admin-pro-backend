require('dotenv').config();

const express = require('express');
const cors = require('cors');


const { dbConnection } = require('./database/config');

// Crear el servidor express
const app = express();

//Configurar cors

app.use(cors());

dbConnection();
//console.log(process.env);

//mongo db

//pass 6g8plT9cLjsIkdX4
//user zarpax


//Rutas
app.get('/', (req, resp) => {

    resp.json({
        ok: true,
        msg: 'Hola Mundo24'
    })
})


app.listen(3000, () => {
    console.log('servidor corriendo');
});