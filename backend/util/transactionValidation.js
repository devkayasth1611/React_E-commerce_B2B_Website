const zod = require('zod');
const transactionValidation = zod.object({
    body: zod.object({
        // transactionDate: zod.ZodDate(),
        paymentAmount: zod 
        .number(),
    }),
});

module.exports = transactionValidation;