const { model, Schema } = require('mongoose');

const ResultadosSchema = Schema(
    {
        ResultadoExamen:{
            type: String,
            required: [ true, 'El resultado del examen es necesario'],
            unique:true
        },
        ResultadoExamen:{
            type: Number,
            default: true,
            required:true
        },
        Observaciones:{
            type: String,
            required: [ true, 'Las observaciones del examen es necesario'],
            unique:true
        },

    }
);


module.exports = model('Resultados', resultadosSchema );