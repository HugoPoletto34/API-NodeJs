const express = require('express');
const pool = require('../db');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const tok = require('../token')

router.post('/cadastro', (req,res,next) => {
    bcrypt.hash(req.body.senha, 10, async(errBcrypt, hash) => {
        if(errBcrypt){ return res.status(500).send({erro: errBcrypt})}
        console.log(hash)
        const ID = Math.random() * 10000;
        const veri = await pool.query(`select email from capitão where email = '${req.body.email}'`)
        if(veri.rowCount > 0){
            return res.status(401).send({mensagem: "Não foi possível cadastrar!"});
        }
        else {
            await pool.query(`INSERT INTO capitão (cod_capitao, nome_capitao, email, senha) VALUES (${ID}, '${req.body.nome}', '${req.body.email}', '${hash}');`)
            res.header({
                "Authorization": "Bearer " + hash
             })
             
            const response = {
                mensagem: "Criado com sucesso!",
                usuario:  {
                    nome: req.body.nome,
                    email: req.body.email
                }
            }
            return res.status(201).send(response);
        }

    });
});

router.post('/login', async(req,res,next) => {
    const todo = await pool.query(`select * from capitão where email = '${req.body.email}'`)
    console.log("login")
    if(todo.length < 1)
        return res.status(401).send({mensagem: "Falha na autenticação"})
    bcrypt.compare(req.body.senha, todo.rows[0].senha, (err, result) => {
        if (err) 
            return res.status(401).send({mensagem: "Falha na autenticação"})
        if (result){
            const token = jwt.sign({
                cod_capitao: todo.rows[0].cod_capitao,
                email: todo.rows[0].email
            }, tok.JSON_TOKEN,
            {
                expiresIn: "1h"
            });
            res.header({
                "Authorization": "Bearer " + token
             });
            return res.status(200).send({
                mensagem: "Autenticado com sucesso",
                token: token
            });
        }
            
        return res.status(401).send({mensagem: "Falha na autenticação"})

        
    })
})

module.exports = router;