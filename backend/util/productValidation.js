const zod = require('zod');
const productValidation = zod.object({
    body: zod.object({
        productName: zod
        .string()
        .max(10,"The maximum character of Product name should be 10")
        .min(5,"The minimum character of Product name should be 5"),
        productDetails: zod 
        .string()
        .max(10,"The maximum character of Product details should be 10")
        .min(5,"The minimum character of Product details should be 5"),
        productPrice: zod.number(),
        productQuantity: zod.number(),
    }),
});

module.exports = productValidation;