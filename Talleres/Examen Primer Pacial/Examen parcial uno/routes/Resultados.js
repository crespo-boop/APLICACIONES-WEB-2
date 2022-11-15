const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createresultados,
    
    deleteresultados
} = require('../controllers').Category;

const { validateFields } = require('../middlewares')

const router= Router();


 router.post('/',[
    check('name', 'EL nombre es requerido').not().isEmpty(),
    validateFields
], createresultados);


 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteresultados);



module.exports = router;