const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController'); 

router.post('/order',orderController.createOrder);
router.get('/order',orderController.getAllOrders);

module.exports = router;