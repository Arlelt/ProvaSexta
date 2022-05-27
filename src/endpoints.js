import { Router } from "express"


import { sequenciaPar, farol, diaSemana, fatorial } from "./services.js";
const server = Router();


server.get('/semaforo/:cor', (req, resp) => {
    try {
        const cor = req.params.cor;

        const x = farol(cor);

        resp.send({
            "msg": x
        })
    }
    catch (err) {
        resp.status(404).send({
            "error": err.message
        })
    }

})

server.get('/diasemana', (req, resp) => {

    try {
        const { dia } = req.query;

        const x = diaSemana(dia)

        resp.send({
            "dia": x
        })
    }
    catch (err) {
        resp.status(404).send({
            "error": err.message
        })
    }
})

server.post('/fatorial', (req, resp) => {
    try {
        const { num } = req.query;

        const x = fatorial(num);

        resp.send({
            "fat": x
        })
    } 
    catch (err) {
        resp.status(404).send({
            "error": err.message
        })
    }
})

server.post('/par', (req, resp) =>{

    try{
        const { num } = req.body;

    const x = sequenciaPar(num)

    resp.send({
        "limite":x
    })
    }
    catch(err){
        resp.status(404).send({
            "error":err.message
        })
    }
    
})

export default server;