const express = require('express');
const productsController = require('./productsController');
const router = express.Router();

/* GET product page. */
router.get('/', productsController.get);
router.get('/:id', productsController.getById);
router.put('/:id', productsController.put);
router.post('/', productsController.insert);
router.delete('/:id', productsController.delete);

module.exports = router;