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