const express = require('express');
const vendasController = require('./vendasController');
const router = express.Router();

/* GET product page. */
router.get('/', vendasController.get);  //list 
router.post('/add_produto/', vendasController.add_produto);  //list 
router.get('/cria_venda', vendasController.cria_venda);  //list 
router.delete('/:id', vendasController.deleteID);   //delete

module.exports = router;