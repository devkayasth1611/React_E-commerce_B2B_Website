const orderSchema = require('../model/orderModel')

exports.createOrder = (req,res) => {
    const order = new orderSchema(req.body);
    order.save()
    .then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving order",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "Order Saved Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving order",
                status: 400,
                error: err,
        });
    })
}

exports.getAllOrders = (req,res) => {
    orderSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching order",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "Order fetch Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching order",
                status: 400,
                error: err,
        });
    })
}

exports.getOrderById = (req, res) => {
    // const proId = req.params.id;
    orderSchema
      .findById(req.params.id)
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while fetching the Order",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Order fetched successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while fetching the Order",
          status: 400,
          error: err,
        });
      });
  };
  
  exports.updateOrder = (req, res) => {
    orderSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Order",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Order updated successfully",
            status: 200,
            data: data,
          });
        }
      });
  };