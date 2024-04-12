const productSchema = require("../model/productModel");

exports.createProduct = (req,res) => {
    const product = new productSchema(req.body);
    product.save()
    .then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the product",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Product saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the product",
            status: 400,
            error: err,
          });
    })

}

exports.getAllProducts = (req,res) => {
    productSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the product",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Product saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the product",
            status: 400,
            error: err,
          });
    })
}

exports.getproductById = (req, res) => {
    // const proId = req.params.id;
    productSchema
      .findById(req.params.id)
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while fetching the product",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Product fetched successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while fetching the product",
          status: 400,
          error: err,
        });
      });
  };
  
  exports.updateProduct = (req, res) => {
    productSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the product",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Product updated successfully",
            status: 200,
            data: data,
          });
        }
      });
  };