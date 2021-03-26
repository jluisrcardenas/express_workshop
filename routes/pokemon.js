const express = require('express');
const pokemon = express.Router();
//const pk = require('../pokedex.json').pokemon;
const db = require('../config/database');

pokemon.post('/', (req, res, next)=>{
    return res.status(200).send(req.body);
});

pokemon.get('/', async (req, res, next)=>{
    const pk = await db.query("SELECT * FROM pokemon");
    return res.status(200).json({code: 1, message: pk});
});

pokemon.get('/:id([0-9]{1,3})', async (req, res, next)=>{
    const pk = await db.query("SELECT * FROM pokemon");
    const id = req.params.id - 1;
    (id >= 0 && id <= 722) ?
        res.status(200).json({code: 1, message: pk[req.params.id - 1]}) :
        res.status(404).json({code: 1, message: "Pokemon no encontrado"});
});

pokemon.get('/:name([A-Za-z]+)', async (req, res, next)=>{
    const pk = await db.query("SELECT * FROM pokemon");
    const name = req.params.name;
    //operador ternario: condicion ? valir si verdadero : valor si falso
    const pkm = pk.filter((p)=>{
        return (p.pok_name.toUpperCase() == name.toUpperCase()) && p;
    });
    (pkm.length > 0) ? 
        res.status(200).json({code: 1, message: pkm}) : 
        res.status(404).json({code: 1, message: "Pokemon no encontrado"});
});


module.exports = pokemon;