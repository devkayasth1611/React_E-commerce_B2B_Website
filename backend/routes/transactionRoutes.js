const express = require('express');
const router = express.Router();
const transactionController = require('../controller/tranactionController'); 

router.post('/order',transactionController.createTransaction);
router.get('/order',transactionController.getAllTransaction);

module.exports = router;