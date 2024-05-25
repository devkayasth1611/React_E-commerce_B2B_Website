const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController'); 
const categoryValidation = require('../util/categoryValidation');
const validate = require('../middleware/zodMiddleware')


router.post('/category', validate(categoryValidation),categoryController.createCategory);
router.get('/category', categoryController.getAllCategory);
router.get("/category/:id", categoryController.getCategoryById);
router.post("/category/:id", categoryController.updateCategoryById);
router.delete("/category/:id", categoryController.deleteCategoryById);
router.delete("/category", categoryController.deleteAllCategory);

module.exports = router;