const zod = require('zod');
const subCategoryValidation = zod.object({
  body: zod.object({
    subCategoryName: zod
      .string()
      .max(10, "the max char of produc Name should be 10")
      .min(5, "the max char of produc Name should be 5")
    }),
});
module.exports = subCategoryValidation;