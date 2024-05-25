const zod = require ('zod');
const categoryValidation = zod.object({
    body:zod.object({
        categoryName:zod
        .string()
        .max(20, "the max char of category Name should be 20")
        .max(5, "the max char of category Name should be 5"),
    }),
});

module.exports = categoryValidation;