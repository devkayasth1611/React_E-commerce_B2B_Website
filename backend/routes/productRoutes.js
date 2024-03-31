const express = require('express');
const router = express.Router()
const productController = require("../controller/productController");

router.post('/product',productController.createProduct)

module.exports = router