const { response } = require('express');
const { Resultados } = require('../models');





const createresultados = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existresultados =  await Resultados.findOne({name: body.name})

    if (existresultados)
    {
        return res.status(400).json({
            msg:`La el resultado ${ existresultado.name } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const resultados = new Resultados(data);

    const newresultado =  await Resultados.save();
    res.status(201).json(newCategory);
}

const deleteresultados =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedresultados =  await Resultados.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedresultados);
}

 module.exports ={
    createresultados,
    deleteresultados
 }