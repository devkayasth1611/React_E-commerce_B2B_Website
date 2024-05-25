const express = require('express');
const router = express.Router()
const customerController = require("../controller/customerController");
const validate = require('../middleware/zodMiddleware');
const customerValidation = require('../util/customerValidation')

router.post('/customer', validate(customerValidation),customerController.addCustomer)
router.get('/customer',customerController.getAllCustomer)
router.get("/customer/:id", customerController.getCustomerById);
router.post("/customer/:id", customerController.updateCustomerById);
router.delete("/customer/:id", customerController.deleteCustomerById);
router.delete("/customer", customerController.deleteAllCustomer);


module.exports = router