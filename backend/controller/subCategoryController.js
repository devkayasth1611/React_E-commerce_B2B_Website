const subCategorySchema = require('../model/subCategoryModel')

exports.createSubCategory = (req,res) => {
    const subCategory = new subCategorySchema(req.body);
    subCategory.save()
    .then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving sub category",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "sub category Saved Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving sub category",
                status: 400,
                error: err,
        });
    })
}

exports.getAllSubCategory = (req,res) => {
    subCategorySchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching sub category",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "sub category fetched Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching sub category",
                status: 400,
                error: err,
        });
    })
}

exports.getSubCategoryById = (req, res) => {
    // const proId = req.params.id;
    subCategorySchema
      .findById(req.params.id)
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while fetching the sub category.",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "sub category fetched successfully.",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while fetching the sub category.",
          status: 400,
          error: err,
        });
      });
  };
  
  exports.updateSubCategoryById = (req, res) => {
    subCategorySchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the sub category",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "sub category updated successfully",
            status: 200,
            data: data,
          });
        }
      }).catch((err) => {
        res.json({
            message: "Something went wrong while deleting the All sub category",
            status: 400,
            error: err,
        })
      })
  };

  exports.deleteAllSubCategory = (req,res) => {
    subCategorySchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All sub category",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All sub category deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All sub category",
            status: 400,
            error: err,
      })
    })
  }

  exports.deleteSubCategoryById = (req,res) => {
    const id = req.params.id;
    console.log(id);
    subCategorySchema.findOneAndDelete(
      {
        _id : id,
      },
    )
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the sub category",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "sub category deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the sub category",
            status: 400,
            error: err,
      })
    })
  }