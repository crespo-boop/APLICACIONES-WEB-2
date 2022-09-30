//Recorrer y mostrar elementos de todos los arreglos de objetos aplicando 3 instrucciones de repetición distintas
const { Paciente, TipoExamen, Resultado } = require('./Ejercicio-2')


const estructuraForOf = () =>{
    console.log('Ciclo For Of');
    console.log('Pacientes');
    for( let Pacientes of Paciente) console.log(Pacientes);

    console.log('\nTipo de Examen');
    for( let Tipos of TipoExamen) console.log(Tipos);

    console.log('\nResultado de Examen');
    for( let Resultados of Resultado) console.log(Resultados);
}

const estructuraWhile = () =>{
    console.log('Ciclo While');
    let iterador= 0
    console.log('Pacientes');
    while( iterador< Paciente.length){
        console.log(Paciente[iterador]);
        iterador++;
    }

    console.log('\nTipo de Examen');
    iterador= 0;
    while( iterador< TipoExamen.length){
        console.log(TipoExamen[iterador]);
        iterador++;
    }

    console.log('\nResultado de Examen');
    iterador= 0;
    while( iterador< Resultado.length){
        console.log(Resultado[iterador]);
        iterador++;
    }
}

const estructuraForLoop = () =>{
        console.log('Ciclo For');
        console.log('Pacientes');
        for(let iterador = 0; iterador< Paciente.length; iterador++){
            console.log(Paciente[iterador]);
        }


        console.log('\nTipo de Examen');
        for(let iterador = 0; iterador< TipoExamen.length; iterador++){
            console.log(TipoExamen[iterador]);
        }
 

        console.log('\nResultado de Examen');
        for(let iterador = 0; iterador< Resultado.length; iterador++){
            console.log(Resultado[iterador]);
        };
}

estructuraForOf();
estructuraWhile();
estructuraForLoop();
