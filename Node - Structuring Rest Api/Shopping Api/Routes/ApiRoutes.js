const express = require('express');
const router = express.Router();

const { productList, createProduct, editProduct, deleteProduct } = require('../Controllers/ProductController');

router.get('/products', productList);
router.post('/products/add', createProduct);
router.patch('/products/edit/:id', editProduct);
router.delete('/products/delete/:id', deleteProduct);


module.exports = router;
