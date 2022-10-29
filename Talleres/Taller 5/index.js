const cors = require("cors");
const express  = require("express");

const app =  express();
const PUERTO =  3000;

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )

let Pacientes = [];


app.get('/', (req,res)=>{
    res.status(200).send(
        Pacientes
    )
})
app.get('/:id', (req,res)=>{
    const {id} =  req.params;
    // req.params.identification
    let result = Pacientes.filter(p => p.id === id);
    if (result.length>0)
    {
        res.status(200).send(result[0]);
    }
    res.status(404).send({
        "message":"No se puede encontrar el elemento con esa identificación!"
    });
})
app.post('/', (req,res)=>{
    const {body} = req;
    // req.body.name
    // req.body.address
    Pacientes.push(body);
    res.status(200).send({
        message:"Dato insertado correctamente",
        response: body
    })
})

app.put('/', (req,res)=>{
    const {id, nombre, Tsangre, identificacion} = req.body;
    let Paciente =  Pacientes.filter(p=> p.id === id)[0] || {}
    
   
    Paciente.nombre = nombre;
    Paciente.Tsangre = Tsangre;
    Paciente.identificacion = identificacion;
    
    
    res.status(200).send(
        {
            message:"El dato fue modificado correctamente",
            response: Pacientes
        }
    )
})



app.delete('/:id', (req,res)=>{
    const {id} =  req.params;
    Pacientes = Pacientes.filter(p => p.id !== id);
    res.status(200).send({
        response:"Se eliminó el Paciente con éxito!"
    })
})
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})