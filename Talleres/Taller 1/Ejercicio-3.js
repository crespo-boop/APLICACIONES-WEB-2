//Aplicar vínculos entre entidades con relaciones entre objetos (puede aplicar ID o integrar todo el objeto).

const entityObjects = () =>{ 

    const Paciente = {
        id: 1,
        Nombre: 'Henry Zura',
        Tsangre:'+A',
        Identificacion: '11317047445'
    }

    const TipoExamen ={
        id: 1,
        Descripcion: 'Prueba Covid',
        Indicaciones: 'Prueba covid de sangre',
        idPaciente:1
    }

    const Resultado = {
        id: 1,
        idPacienete: 1,
        idTipoExamen: 1,
        ResultadoExamen: 'Positivo',
        ValorPagado: 20,
        Observaciones: 'Medidas de bioseguridad'
    }

    console.log( Paciente );
    console.log( TipoExamen );
    console.log( Resultado );
}
entityObjects();
