const zod = require('zod');
const adminValidation = zod.object({
    body: zod.object({
        adminName: zod
        .string()
        .max(10,"The maximum character of Admin name should be 10")
        .min(3,"The minimum character of Admin name should be 3"),
        adminEmail: zod.string().email(),
        adminAddress: zod.string()
        .max(100,"The maximum character of Admin address should be 100")
        .min(5,"The minimum character of Admin address should be 5"),
        adminPassword: zod.number(),
    }),
});

module.exports = adminValidation;