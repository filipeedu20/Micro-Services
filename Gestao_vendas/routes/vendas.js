const express = require('express');
const vendasController = require('./vendasController');
const router = express.Router();

/* GET product page. */
router.get('/', vendasController.get);  //list 
router.post('/', vendasController.post);  //insert 
router.put('/', vendasController.put);  //update
router.delete('/:id', vendasController.deleteID);   //delete

module.exports = router;