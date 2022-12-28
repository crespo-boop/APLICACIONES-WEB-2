const { Schema, model } = require("mongoose");




const TipoExamenSchema = Schema({

    Descripcion: {
        type: String,
        required:[true, 'El campo Descripcion es obligatorio']
    },

    Indicaciones: {
        type: String,
        required:[ true, 'El campo Indicaciones es obligatorio' ]
    }
})


module.exports= model('TipoExamen', TipoExamenSchema)