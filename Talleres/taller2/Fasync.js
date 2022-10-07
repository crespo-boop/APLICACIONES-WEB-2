const { TipoExamen, Resultado } = require('./Arreglos')



async function BuscarRseultadouwu(id){
    const RESULT2 = Resultado.find((RESULT2)=> RESULT2.id===id );
    if (!RESULT2)
    {
        const error =  new Error();
        error.message="Resultado no encontrado";
        throw error;
    }
    return RESULT2;
}

async function BuscarTPEXAMEN(id){
    const TPEXAMEN =  TipoExamen.find((TPEXAMEN)=>{ return TPEXAMEN.id===id;});
    if (!TPEXAMEN)
    {
        const error = new Error();
        error.message="Tipo de examen no encontrado :(";
        throw error;
    }
    return TPEXAMEN;
}
(async ()=>{
    try
    {
        const RESULT2  =   await BuscarRseultadouwu(3);
        const TPEXAMEN =   await  BuscarTPEXAMEN(RESULT2.idTipoExamen);
        RESULT2.TPEXAMEN = TPEXAMEN;
        console.log(RESULT2)
        console.log(TPEXAMEN)
    }
    catch (err)
    {
        console.log(err.message)
    }
}
)();
