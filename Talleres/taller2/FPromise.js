const { TipoExamen, Resultado } = require('./Arreglos')

function EncontrarExamen(id){
    return new Promise((resolve, reject)=>{
        const EXAMEN = TipoExamen.find((EXAMEN)=> EXAMEN.id===id );
        if (!EXAMEN)
        {
            const error= new Error();
            error.message="Examen no realizado";
            reject(error);
        }
        resolve(EXAMEN);
    })
}

function encontrarresultado(id){
    return new Promise((resolve, reject)=>{
        const Resul =  Resultado.find((Resul)=>{ return Resul.id===id;});
        if (!Resul)
        {
            const error =  new Error();
            error.message="Resultado no Encontrado ";
            reject(error);
        }
        resolve(Resul);
    })
}


encontrarresultado(2)
.then((Resul)=>{ 
    console.log(Resul);
    return EncontrarExamen(Resul.idTipoExamen);
})
.then((EXAMEN)=>{
    console.log(EXAMEN)
})
.catch((error)=>{
    console.log(error.message)
})
