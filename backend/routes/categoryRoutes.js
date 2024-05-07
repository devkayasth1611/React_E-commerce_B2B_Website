const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController'); 

router.post('/category', categoryController.createCategory);
router.get('/category', categoryController.getAllCategory);
router.get("/category/:id", categoryController.getCategoryById);
router.post("/category/:id", categoryController.updateCategoryById);
router.delete("/category/:id", categoryController.deleteCategoryById);
router.delete("/category", categoryController.deleteAllCategory);

module.exports = router;