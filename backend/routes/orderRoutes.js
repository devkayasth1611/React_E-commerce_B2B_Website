const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController'); 
const validate = require('../middleware/zodMiddleware');
const orderValidation = require('../util/orderValidation');

router.post('/order',validate(orderValidation),orderController.createOrder);
router.get('/order',orderController.getAllOrders);
router.get("/order/:id", orderController.getOrderById);
router.post("/order/:id",orderController.updateOrderById);
router.delete("/order/:id", orderController.deleteOrderById);
router.delete("/order", orderController.deleteAllOrder);

module.exports = router;