//Luego crear arreglos que por cada entidad almacenen por lo menos 5 objetos.

    const Paciente = [
        {
            id: 1,
            Nombre: 'Henry Zura',
            Tsangre:'+A',
            Identificacion: '1317047445'
        },
        {
            id: 2,
            Nombre: 'Jairo Vera',
            Tsangre:'-B',
            Identificacion: '1317047442'
        },
        {
            id: 3,
            Nombre: 'Paul Mariño',
            Tsangre:'+O',
            Identificacion: '1317047443'
        },
        {
            id: 4,
            Nombre: 'Henry Davis',
            Tsangre:'-A',
            Identificacion: '1317047444'
        },
        {
            id: 5,
            Nombre: 'Antonia Bertrandt',
            Tsangre:'-AB',
            Identificacion: '1317047446'
        },
    ]
    
    const TipoExamen =[
        {
            id: 1,
            Descripcion: 'Prueba Covid',
            Indicaciones: 'Prueba covid de sangre'
        },
        {
            id: 2,
            Descripcion: 'Prueba de ETS',
            Indicaciones: 'Analisis de sangre '
        },
        {
            id: 3,
            Descripcion: 'Prueba Vocales',
            Indicaciones: 'Prueba de Saliba'
        },
        {
            id: 4,
            Descripcion: 'Prueba de Dengue',
            Indicaciones: 'Prueba de sangre'
        },
        {
            id: 5,
            Descripcion: 'Prueba Embarazo',
            Indicaciones: 'Prueba de sangre'
        },
    ]
    
    const Resultado = [
        {
            id: 1,
            idPacienete: 1,
            idTipoExamen: 1,
            ResultadoExamen: 'Positivo',
            ValorPagado: 20,
            Observaciones: 'Medidas de bioseguridad'
        },
        {
            id: 2,
            idPacienete: 2,
            idTipoExamen: 2,
            ResultadoExamen: 'Negativo',
            ValorPagado: 30,
            Observaciones: 'Usar Proteccion'
        },
        {
            id: 3,
            idPacienete: 3,
            idTipoExamen: 3,
            ResultadoExamen: 'Positivo',
            ValorPagado: 25,
            Observaciones: 'Evitar el consumo de acidos '
        },
        {
            id: 4,
            idPacienete: 4,
            idTipoExamen: 4,
            ResultadoExamen: 'Positivo',
            ValorPagado: 50,
            Observaciones: 'Uso de mascarilla'
        },
        {
            id: 5,
            idPacienete: 5,
            idTipoExamen: 5,
            ResultadoExamen: 'Positivo',
            ValorPagado: 60,
            Observaciones: '3 meses de embarazo'
        },
    ]


module.exports = { //Exportar los arrays de objetos
    Paciente,
    TipoExamen,
    Resultado

}
