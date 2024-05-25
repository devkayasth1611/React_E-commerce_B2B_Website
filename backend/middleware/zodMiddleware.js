// //promise js object
// //1.body
// //2.params
// //3.headers
// //TPAPI
// const BadRequest = require("http-errors");
const zod = require('zod');
// // const object = require("require");
// const validate = (schema) => (req, res, next) => {
//   try {
//     const bodyPromise = schema.body
//       ? schema.parseAsync(req.body)
//       : Promise.resolve({});
//     const paramsBody = schema.params
//       ? schema.parseAsync(req.params)
//       : Promise.resolve({});
//     const headersBody = schema.headers
//       ? schema.parseAsync(req.headers)
//       : Promise.resolve({});

//     promise
//       .all([bodyPromise, paramsBody, headersBody])
//       .then((data) => {
//         next();
//       })
//       .catch((err) => {
//         next(new BadRequest(err.errors));
//       });
//   } catch (err) {
//     next(new BadRequest(err.errors));
//   }
// };
// module.exports = validate
const validate = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync({
      body: req.body,
      params: req.params,
      headers: req.headers,
    });
    return next();
  } catch (err) {
    return res.json({
      message: "Something went wrong while validating the request",
      status: 400,
      error: err,
    });
  }
};

module.exports = validate;