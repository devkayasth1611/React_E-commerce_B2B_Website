const zod = require('zod');
const feedbackValidation = zod.object({
    body: zod.object({
        rattings: zod.number(),
        comments: zod 
        .string()
        .max(100,"The maximum character of comment should be 100")
        .min(5,"The minimum character of comment should be 5"),    
    }),
});

module.exports = feedbackValidation;