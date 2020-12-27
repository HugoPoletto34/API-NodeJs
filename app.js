const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');
const rotaUsuarios = require('./routes/usuarios');
const cors = require('cors')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())

app.use(cors({origin: "http://127.0.0.1:5500"}));
app.use((req,res,next) => {
    res.header('Access-Control_Allow_Origin', '*')
    res.header(
        'Access-Control_Allow_Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );


    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow_Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.statusCode(200).send({})
    }

    next();
})

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);
app.use('/usuarios', rotaUsuarios);


app.use((req,res,next) => {
    const erro = new Error('Não Encontrado')
    erro.status = 404
    next(erro)
})

app.use((error, req,res,next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensasgem: error.message
        }
    }); 
});

module.exports = app;