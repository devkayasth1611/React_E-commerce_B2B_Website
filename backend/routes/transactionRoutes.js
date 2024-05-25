const express = require('express');
const router = express.Router();
const transactionController = require('../controller/tranactionController'); 
const validate = require("../middleware/zodMiddleware")
const transactionValidation = require('../util/transactionValidation');

router.post('/transaction',validate(transactionValidation),transactionController.createTransaction);
router.get('/transaction',transactionController.getAllTransaction);
router.get("/transaction/:id", transactionController.getTransactionById);
router.post("/transaction/:id", transactionController.updateTransactionById);
router.delete("/transaction/:id", transactionController.deleteTransactionById);
router.delete("/transaction", transactionController.deleteAllTransaction);

module.exports = router;