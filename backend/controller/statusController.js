const statusSchema = require('../model/statusModel')

exports.createStatus = (req,res) => {
    const status = new statusSchema(req.body);
    status.save()
    .then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving status",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "status Saved Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving status",
                status: 400,
                error: err,
        });
    })
}

exports.getAllStatus = (req,res) => {
    statusSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching status",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "status fetched Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching status",
                status: 400,
                error: err,
        });
    })
}

exports.getStatusById = (req, res) => {
    // const proId = req.params.id;
    statusSchema
      .findById(req.params.id)
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while fetching the status.",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "status fetched successfully.",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while fetching the status.",
          status: 400,
          error: err,
        });
      });
  };
  
  exports.updateStatusById = (req, res) => {
    statusSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the status",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "status updated successfully",
            status: 200,
            data: data,
          });
        }
      }).catch((err) => {
        res.json({
            message: "Something went wrong while deleting the All status",
            status: 400,
            error: err,
        })
      })
  };

//   exports.deleteAllStatus = (req,res) => {
//     subCategorySchema.deleteMany()
//     .then((data) => {
//       if(!data){
//         res.json({
//           message: "Something went wrong while deleting the All status",
//             status: 400,
//             error: err,
//         });
//       }else{
//         res.json({
//           message: "All  deleted Successfully",
//             status: 200,
//             data: data,
//         });
//       }
//     }).catch((err) => {
//       res.json({
//         message: "Something went wrong while deleting the All sub category",
//             status: 400,
//             error: err,
//       })
//     })
//   }

  exports.deleteStatusById = (req,res) => {
    const id = req.params.id;
    // console.log(id);
    statusSchema.findOneAndDelete(
      {
        _id : id,
      },
    )
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the status",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "status deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the status",
            status: 400,
            error: err,
      })
    })
  }