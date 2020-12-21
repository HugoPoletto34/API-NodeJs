exports.getPedidos = (req,res,next) => {
    res.status(200).send({
        mensagem: "Usando o GET dentro da toda de pedido"
    });
};

exports.postPedido = (req,res,next) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }

    res.status(201).send({
        mensagem: "Usando o POST dentro da roda de pedidos",
        pedido: pedido
    })
}

exports.getPedido = (req,res,next) => {
    res.status(201).send({
        mensagem: "Usando o GET de um pedido exclusivo",
        id: `${req.params.id_pedido}`
    })
}

exports.patchPedido = (req,res,next) => {
    res.status(201).send({
        mensagem: "Usando o PATCH dentro da roda de pedidos"
    })
}

exports.deletePedido = (req,res,next) => {
    res.status(201).send({
        mensagem: "Usando o DELETE dentro da roda de pedidos"
    })
}