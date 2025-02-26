const express = require('express')
const pool = require('../db');
const router = express.Router();
const PedidosController = require('../controllers/pedidos-controller')

router.get('/', PedidosController.getPedidos);
router.post('/', PedidosController.postPedido)
router.get('/:id_pedido', PedidosController.getPedido)
router.patch('/', PedidosController.patchPedido)
router.delete('/', PedidosController.deletePedido)

module.exports = router;