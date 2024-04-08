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
    productSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the customer",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Customer saved successfully",
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
