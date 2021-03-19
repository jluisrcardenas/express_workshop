//console.log("Hola Mundo");

const express = require('express');
const app = express();
const { pokemon } = require('./pokedex.json');

/**
 * Verbos HTTP
 * GET
 * POST
 * PATCH
 * PUT
 * DELETE
 */

app.get('/',(req, res, next) =>{
    return res.status(200).send("Bienvenido al Pokedex");
});

app.get('/pokemon',  (req, res, next)=>{
    return res.status(200).send(pokemon);
});

app.get('/pokemon/:id([0-9]{1,3})',  (req, res, next)=>{
    const id = req.params.id - 1;
    (id >= 0 && id <= 150) ?
        res.status(200).send(pokemon[req.params.id - 1]) :
        res.status(404).send("Pokemon no encontrado");
});

app.get('/pokemon/:name([A-Za-z]+)',  (req, res, next)=>{
    const name = req.params.name;
    //operador ternario: condicion ? valir si verdadero : valor si falso
    const pkm = pokemon.filter((p)=>{
        return (p.name.toUpperCase() == name.toUpperCase()) ?  p : null;
    });
    (pkm.length > 0) ? 
        res.status(200).send(pkm) : 
        res.status(404).send("Pokemon no encontrado");
});

app.listen(process.env.PORT || 3000,() => {
    console.log("Server is running...");
});