const cors = require("cors");
const express  = require("express");
const  { conecxionBaseDatos } = require('./model/db.config')
const TipoExamen= require('./model/TipoExamen')

const app =  express();
const PUERTO =  4000;

const database = async ()=>{
    await conecxionBaseDatos();

}
database();

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )


app.get('/api/v2/tipoexamen', async (req,res)=>{

    const datos = await TipoExamen.find()
    
    res.status(200).send(
        datos
    )
})

app.post ('/api/v2/tipoexamen', async (req,res)=>{
    const { Descripcion, Indicaciones} = req.body;
    const examen = new TipoExamen({ Descripcion, Indicaciones })
    await examen.save();
    res.status(200).send({
        message:"Dato insertado correctamente",
        examen
    })
})

app.put('/api/v2/tipoexamen/:id', async (req,res)=>{
    const {id} = req.params;
    const {...data} = req.body;

    const examen = await TipoExamen.findByIdAndUpdate(id,data)
    
    res.status(200).send(
        {
            message:"dato modificado correctamente",
            examen
        }
    )

})
app.delete('/api/v2/tipoexamen/:id', async (req,res)=>{
    const {id} =  req.params;
    const examen = await TipoExamen.deleteOne(id)
    res.status(200).send({
        response:"Se eliminó el estudiante con éxito!"
    })
})



app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})