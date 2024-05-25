const express = require('express');
const router = express.Router()
const productController = require("../controller/productController");
// const AuthUtil = require("../util/Auth");
const validate = require("../middleware/zodMiddleware")
const productValidation = require("../util/productValidation")

// router.post('/product',productController.createProduct);

router.post('/product',validate(productValidation),productController.createProduct);

router.get('/product',productController.getAllProducts);

// router.get(
//   "/product",
//   AuthUtil.validateRequest("123456"), //1st filter , 2ndwith parameters 3rd
//   productController.getAllProducts
// );
// router.get(
//     "/product",
//     productController.getAllProducts
//   );

router.get("/product/:id", productController.getproductById);
router.post("/product/:id", productController.updateProductById);
router.delete("/product/:id",productController.deleteProductById);
router.delete("/product",productController.deleteAllProduct);

module.exports = router