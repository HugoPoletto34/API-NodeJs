const express = require('express');
const pool = require('../db');
const router = express.Router();
const login = require('../middleware/login')

router.get('/', (req,res,next) => {
    res.status(200).send({
        mensagem: "Usando o GET dentro da toda de produtos"
    });
});

router.post('/', login.obrigatorio, async(req,res,next) => {
    console.log(req.usuario)
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }
    const Todo = await pool.query('select * from capitão')

    res.status(201).send({
        mensagem: "Usando o POST dentro da roda de produtos",
        produto: produto,
        capitaos: Todo.rows
    })
})

router.get('/:id_produto', (req,res,next) => {
    res.status(201).send({
        mensagem: "Usando o GET de um produto exclusivo",
        id: `${req.params.id_produto}`
    })
})

router.patch('/', (req,res,next) => {
    res.status(201).send({
        mensagem: "Usando o PATCH dentro da roda de produtos"
    })
})

router.delete('/', (req,res,next) => {
    res.status(201).send({
        mensagem: "Usando o DELETE dentro da roda de produtos"
    })
})

module.exports = router;