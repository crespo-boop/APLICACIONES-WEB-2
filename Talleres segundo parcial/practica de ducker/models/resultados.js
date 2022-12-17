const { model, Schema } = require('mongoose');

const  ResultadosSchema = Schema(
    {
        idPacienete:{
            type: Number,
            default:0
        },
        idTipoExamen:{
            type: Number,
            default:0
        },
        ResultadoExamen:{
            type: String,
            required: [ true, 'La resultado es obligatoria'],
        },
        ValorPagado:{
            type: Number,
            default:0
        },
        Observaciones:{
            type: String,
            required: [ true, 'La observacion es obligatoria'],
        }

    }
);

module.exports = model('Resultados', ResultadosSchema );