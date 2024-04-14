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
  
  exports.updateOrderById = (req, res) => {
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
      })
  };

  exports.deleteAllOrder = (req,res) => {
    orderSchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All order",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Order deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All order",
            status: 400,
            error: err,
      })
    })
  }

  exports.deleteOrderById = (req,res) => {
    const id = req.params.id;
    console.log(id);
    orderSchema.findOneAndDelete(
      {
        _id : id,
      },
    )
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the order",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "Order deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the order",
            status: 400,
            error: err,
      })
    })
  }