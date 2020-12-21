const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.statusCode(200).send({message: "CERTASSO meu caro amigo tixinha!"})
});

module.exports = app;