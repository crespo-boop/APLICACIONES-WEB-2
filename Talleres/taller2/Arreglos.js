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
      
        idTipoExamen: 1,
        ResultadoExamen: 'Positivo',
        ValorPagado: 20,
        Observaciones: 'Medidas de bioseguridad'
    },
    {
        id: 2,
        
        idTipoExamen: 2,
        ResultadoExamen: 'Negativo',
        ValorPagado: 30,
        Observaciones: 'Usar Proteccion'
    },
    {
        id: 3,
        
        idTipoExamen: 3,
        ResultadoExamen: 'Positivo',
        ValorPagado: 25,
        Observaciones: 'Evitar el consumo de acidos '
    },
    {
        id: 4,
        
        idTipoExamen: 4,
        ResultadoExamen: 'Positivo',
        ValorPagado: 50,
        Observaciones: 'Uso de mascarilla'
    },
    {
        id: 5,
        
        idTipoExamen: 5,
        ResultadoExamen: 'Positivo',
        ValorPagado: 60,
        Observaciones: '3 meses de embarazo'
    },
]


module.exports = { //Exportar los arrays de objetos
TipoExamen,
Resultado

}
