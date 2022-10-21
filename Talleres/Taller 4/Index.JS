const path = require("path");
const express = require("express");
const cors =  require("cors");
const PUERTO = 8080;

const URLTIPO_EXAMEN = path.join(__dirname,"./tipo_examen.html")
const URLRESULTADOS = path.join(__dirname,"./resultados.html")
const URLPACIENTES = path.join(__dirname,"./paciente.html")
const URLERROR = path.join(__dirname,"./Error.html")
const URLinit = path.join(__dirname,"./index.html")

const server =  express();

server.use(cors()).use(express.json())

server.get('/', functionprincipal )

server.get('/paciente', (req,res)=>{
    res.status(200).sendFile(URLPACIENTES);
})
server.get('/tipo_examen',(req,res)=>{
    res.status(200).sendFile(URLTIPO_EXAMEN);
})
server.get('/resultados',(req,res)=>{
    res.status(200).sendFile(URLRESULTADOS);
})
server.use((req,res, next)=>{
    res.status(400).sendFile(URLERROR);
})

function functionprincipal (req, res){
    res.status(200).sendFile(URLinit);
}

server.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo http://localhost:${PUERTO}`);
})


