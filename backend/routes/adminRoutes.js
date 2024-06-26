const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController'); 
const validate = require('../middleware/zodMiddleware');
const adminValidation = require('../util/adminValidation'); 

router.post('/admin', validate(adminValidation),adminController.createAdmin);
router.get('/admin', adminController.getAllAdmin);
router.get("/admin/:id", adminController.getAdminById);
router.post("/admin/:id", adminController.updateAdminById);
router.delete("/admin/:id", adminController.deleteAdminById);
router.delete("/admin", adminController.deleteAllAdmin);

module.exports = router;