const { Router } = require('express')
const { check } =  require('express-validator')


const { 
    createResultado,
    deleteResultado,
    updateResultado,
    getResultados,
    getResultado
} = require('../controllers/resultados');

const { validateFields } = require('../middlewares')

const router = Router();

router.get('/', getResultados);

router.get('/:id',
            [ check('id', 'Este no es un ID de Mongo correcto')
            .isMongoId(), 
            validateFields],
getResultado );

router.post('/',
        [ check('idPacienete')
        .not()
        .isEmpty().withMessage('no debe estar vacio el campo idtutor'),
        check('idTipoExamen')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo idtutorado'),
        check('ResultadoExamen')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo asignatura'),
        check('ValorPagado')
        .not()
        
        .isEmpty().withMessage('No debe estar vacio el campo fecha'),
        check('Observaciones')

        .isEmpty().withMessage('No debe estar vacio el campo hora'),
        validateFields],
 createResultado);

 router.put('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 updateResultado);

 router.delete('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 deleteResultado);

module.exports = router;