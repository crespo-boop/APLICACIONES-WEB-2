const { Schema, model } = require("mongoose");




const ResultadoSchema = Schema({

    ResultadoExamen: {
        type: String,
        required:[true, 'El campo ResultadoExamen es obligatorio']
    },
    ValorPagado: {
        type: String,
        required:[true, 'El campo ValorPagado es obligatorio']
    },
    Observaciones: {
        type: String,
        required:[true, 'El campo Observaciones es obligatorio']
    }
})


module.exports= model('Resultado', ResultadoSchema)