const express = require('express');
const router = express.Router()
const customerController = require("../controller/customerController");

router.post('/customer',customerController.addCustomer)
router.get('/customer',customerController.getAllCustomer)

module.exports = router