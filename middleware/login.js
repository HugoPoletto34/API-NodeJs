const jwt = require('jsonwebtoken')
const tok = require('../token')
const express = require('express');
const router = express.Router();

router.POST('/ValidaToken', (req,res,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, tok.JSON_TOKEN);
        req.usuario = decode;
        next();
    } catch (error) {
        return res.status(401).send({mensagem: 'Falha na verificação'})
    }
    
})

exports.obrigatorio = (req,res,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, tok.JSON_TOKEN);
        req.usuario = decode;
        next();
    } catch (error) {
        return res.status(401).send({mensagem: 'Falha na verificação'})
    }
    

}

exports.opcional = (req,res,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, tok.JSON_TOKEN);
        req.usuario = decode;
        next();
    } catch (error) {
        next();
    }
    

}