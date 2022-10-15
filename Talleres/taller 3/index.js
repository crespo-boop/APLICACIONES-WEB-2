const mongoose = require('mongoose');



const MongoUrl = "mongodb+srv://crespouleam1:crespouleam1@taller-3.olsbs6r.mongodb.net/taller-3";

(async()=>{

    try {
        
        const MongoConection = await mongoose.connect(MongoUrl);  
        
        
        const Paciente = mongoose.model("Paciente", {
            Nombre: String,
            Tsangre: String,
            Identificacion: String
        });

        const TipoExamen  = mongoose.model("TipoExamen ", {
            Descripcion: String,
            Indicaciones: String
        })

        const Resultado  = mongoose.model("Resultado",{
            idPacienete:{type: mongoose.Schema.Types.ObjectId, ref:"Paciente"},
            idTipoExamen:{type: mongoose.Schema.Types.ObjectId, ref:"TipoExamen"},
            ResultadoExamen: String,
            ValorPagado: Number,
            Observaciones: String
        })

        
        const paciente1 = new Paciente({
            Nombre: 'Antonia Bertrandt',
            Tsangre:'-AB',
            Identificacion: '1317047446'
        })
        const SavePaciente = await paciente1.save();
        

        const tipoexamen1 = new TipoExamen({
            Descripcion: 'Prueba Embarazo',
            Indicaciones: 'Prueba de sangre'
        })
        const SaveTipoExamen = await tipoexamen1.save();


        const resultado1 = new Resultado({
            idPacienete: SavePaciente._id,
            idTipoExamen: SaveTipoExamen._id,
            ResultadoExamen: 'Positivo',
            ValorPagado: 60,
            Observaciones: '3 meses de embarazo'
        })
        const SaveResultado = await resultado1.save();


        
        const ViewPaciente = await Paciente.find();
        for(Elementos in ViewPaciente){
            console.log(ViewPaciente[Elementos]);
        }

        
        const ViewTipoExamen = await TipoExamen.find();
        let iterador=0;
        while(iterador <ViewTipoExamen.length){
            console.log(ViewTipoExamen[iterador]);
            iterador++;
        }

        
        const ViewResultado = await Resultado.find();
        for(Elementos of ViewResultado){
            console.log(Elementos);
        }


    } catch (error) {
        console.log(error.message);
    }

})();
