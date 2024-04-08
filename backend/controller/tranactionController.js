const transactionSchema = require('../model/transactionModel')

exports.createTransaction = (req,res) => {
    const transaction = new transactionSchema(req.body);
    transaction.save()
    .then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving transaction",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "Transaction Saved Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving transaction",
                status: 400,
                error: err,
        });
    })
}

exports.getAllTransaction = (req,res) => {
    transactionSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving transaction",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "Transaction Saved Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving transaction",
                status: 400,
                error: err,
        });
    })
}