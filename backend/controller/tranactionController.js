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

exports.getTransactionById = (req, res) => {
    // const proId = req.params.id;
    transactionSchema
      .findById(req.params.id)
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while fetching the Transaction",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Transaction fetched successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while fetching the Transaction",
          status: 400,
          error: err,
        });
      });
  };
  
  exports.updatetransactionById = (req, res) => {
    transactionSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Transaction",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Transaction updated successfully",
            status: 200,
            data: data,
          });
        }
      })
  };

  exports.deleteAllTransaction = (req,res) => {
    transactionSchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All Transaction",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Transaction deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All Transaction",
            status: 400,
            error: err,
      })
    })
  }

  exports.deleteTransactionById = (req,res) => {
    const id = req.params.id;
    console.log(id);
    transactionSchema.findOneAndDelete(
      {
        _id : id,
      },
    )
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the transaction",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "Transaction deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the Transaction",
            status: 400,
            error: err,
      })
    })
  }