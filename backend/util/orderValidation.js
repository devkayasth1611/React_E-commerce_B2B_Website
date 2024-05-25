const zod = require('zod');
const adminValidation = zod.object({
    body: zod.object({
        paymentMethod: zod
        .string()
        .max(10,"The maximum character of Payment method should be 10")
        .min(3,"The minimum character of Payment method should be 3"),
        shippingMethod: zod
        .string()
        .max(10,"The maximum character of shipping method should be 10")
        .min(3,"The minimum character of shipping method should be 3"),
        totalAmount: zod.number(),
    }),
});

module.exports = adminValidation;