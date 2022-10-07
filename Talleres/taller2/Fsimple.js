const { TipoExamen, Resultado } = require('./Arreglos')

function TipoExamenBuscador( id ){
    const tipo = TipoExamen.find(t=>t.id === id);
    if(!tipo){
        console.log('Error id no encontrado');
    }
    else{
        console.log('El paciente 1 se realizo',tipo.Descripcion);
    }
}
function TipoExamenBuscador2( id ){
    const resul = Resultado.find(t=>t.id === id);
    if(!resul){
        console.log('Error id no encontrado');
    }
    else{
        console.log('se le recomienda', resul.Observaciones);
    }
}

TipoExamenBuscador(4)
TipoExamenBuscador2(4);
