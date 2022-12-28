const { Schema, model } = require("mongoose");




const PacienteSchema = Schema({

    Nombre: {
        type: String,
        required:[true, 'El campo Nombre es obligatorio']
    },

    TipoSangre: {
        type: String,
        required:[ true, 'El campo TipoSangre es obligatorio' ]
    },
    Identificacion: {
        type: String,
        required:[ true, 'El campo Identificacion es obligatorio' ]
    }
})


module.exports= model('Paciente', PacienteSchema)