const express = require('express');
const router = express.Router();
const transactionController = require('../controller/tranactionController'); 

router.post('/transaction',transactionController.createTransaction);
router.get('/transaction',transactionController.getAllTransaction);
router.get("/transaction/:id", transactionController.getTransactionById);
router.post("/transaction/:id", transactionController.updatetransactionById);
router.delete("/transaction/:id", transactionController.deleteTransactionById);
router.delete("/transaction", transactionController.deleteAllTransaction);

module.exports = router;