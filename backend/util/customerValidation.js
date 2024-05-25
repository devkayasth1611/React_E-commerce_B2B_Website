const zod = require('zod');
const adminValidation = zod.object({
    body: zod.object({
        customerName: zod
        .string()
        .max(10,"The maximum character of Admin name should be 10")
        .min(3,"The minimum character of Admin name should be 3"),
        customerEmail: zod.string().email(),
        customerAddress: zod.string()
        .max(100,"The maximum character of Admin address should be 100")
        .min(5,"The minimum character of Admin address should be 5"),
        customerContactNo: zod.number(),
    }),
});

module.exports = adminValidation;