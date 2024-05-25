const zod = require ('zod');
const statusValidation = zod.object({
    body:zod.object({
        statusDetails:zod
        .string()
        .max(200, "the max char of status Name should be 200")
        .min(5, "the max char of status Name should be 5"),


    }),
});
module.exports = statusValidation;