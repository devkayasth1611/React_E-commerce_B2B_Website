const express = require('express');
const router = express.Router();
const statusController = require('../controller/statusController'); 

router.post('/status', statusController.createStatus);
router.get('/status', statusController.getAllStatus);
router.get("/status/:id", statusController.getStatusById);
router.post("/status/:id", statusController.updateStatusById);
router.delete("/status/:id", statusController.deleteStatusById);
// router.delete("/status", );

module.exports = router;