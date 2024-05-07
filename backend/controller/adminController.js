const adminSchema = require('../model/adminModel')

exports.createAdmin = (req,res) => {
    const admin = new adminSchema(req.body);
    admin.save()
    .then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving admin",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "Admin Saved Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving admin",
                status: 400,
                error: err,
        });
    })
}

exports.getAllAdmin = (req,res) => {
    adminSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching admin",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "Admin fetched Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching admin",
                status: 400,
                error: err,
        });
    })
}

exports.getAdminById = (req, res) => {
    // const proId = req.params.id;
    adminSchema
      .findById(req.params.id)
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while fetching the admin.",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Admin fetched successfully.",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while fetching the admin.",
          status: 400,
          error: err,
        });
      });
  };
  
  exports.updateAdminById = (req, res) => {
    adminSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the admin",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Admin updated successfully",
            status: 200,
            data: data,
          });
        }
      }).catch((err) => {
        res.json({
            message: "Something went wrong while deleting the All admin",
            status: 400,
            error: err,
        })
      })
  };

  exports.deleteAllAdmin = (req,res) => {
    adminSchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All admin",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Admin deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All admin",
            status: 400,
            error: err,
      })
    })
  }

  exports.deleteAdminById = (req,res) => {
    const id = req.params.id;
    console.log(id);
    adminSchema.findOneAndDelete(
      {
        _id : id,
      },
    )
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the admin",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "Admin deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the admin",
            status: 400,
            error: err,
      })
    })
  }