//console.log("Hola Mundo");

const express = require('express');
const app = express();

/**
 * Verbos HTTP
 * GET
 * POST
 * PATCH
 * PUT
 * DELETE
 */

app.get("/",(req, res, next) =>{
    res.status(200);
    res.send("Bienvenido al servidor");
});

app.get("/:name",  (req, res, next)=>{
    req.params.name;
    res.status(200);
    res.send("Hola, " + req.params.name);
});

app.listen(process.env.PORT || 3000,() => {
    console.log("Server is running...");
});