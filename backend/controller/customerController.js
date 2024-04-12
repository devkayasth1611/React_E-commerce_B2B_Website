const customerSchema = require("../model/customerModel");

exports.addCustomer = (req,res) => {
    const customer = new customerSchema(req.body);
    customer.save().then((data) => {
        if(!data)
        {
            res.json({
                message: "Somthing went wrong while saving the customer",
                ststus: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "Customer add successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the customer",
            status: 400,
            error: err,
          });
    })
}

exports.getAllCustomer = (req,res) => {
    customerSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the customer",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Customer fetch successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the customer",
            status: 400,
            error: err,
          });
    })
}

exports.getCustomerById = (req, res) => {
    // const proId = req.params.id;
    customerSchema
      .findById(req.params.id)
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while fetching the Customer",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Customer fetched successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while fetching the Customer",
          status: 400,
          error: err,
        });
      });
  };
  
  exports.updateCustomer = (req, res) => {
    customerSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Customer",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Customer updated successfully",
            status: 200,
            data: data,
          });
        }
      });
  };