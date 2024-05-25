const express = require('express');
const router = express.Router();
const subCategoryController = require('../controller/subCategoryController'); 
const validate = require('../middleware/zodMiddleware');
const subCategoryValidation = require('../util/subCategoryvalidation')

router.post('/subcategory', validate(subCategoryValidation),subCategoryController.createSubCategory);
router.get('/subcategory', subCategoryController.getAllSubCategory);
router.get("/subcategory/:id", subCategoryController.getSubCategoryById);
router.post("/subcategory/:id", subCategoryController.updateSubCategoryById);
router.delete("/subcategory/:id", subCategoryController.deleteSubCategoryById);
router.delete("/subcategory", subCategoryController.deleteAllSubCategory);

module.exports = router;