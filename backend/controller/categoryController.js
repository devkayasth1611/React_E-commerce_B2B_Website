const categorySchema = require('../model/categoryModel')

exports.createCategory = (req,res) => {
    const category = new categorySchema(req.body);
    category.save()
    .then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving category",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "category Saved Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving category",
                status: 400,
                error: err,
        });
    })
}

exports.getAllCategory = (req,res) => {
    categorySchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching category",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "category fetched Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching category",
                status: 400,
                error: err,
        });
    })
}

exports.getCategoryById = (req, res) => {
    // const proId = req.params.id;
    categorySchema
      .findById(req.params.id)
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while fetching the category.",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "category fetched successfully.",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while fetching the category.",
          status: 400,
          error: err,
        });
      });
  };
  
  exports.updateCategoryById = (req, res) => {
    categorySchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the category",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "category updated successfully",
            status: 200,
            data: data,
          });
        }
      }).catch((err) => {
        res.json({
            message: "Something went wrong while deleting the All category",
            status: 400,
            error: err,
        })
      })
  };

  exports.deleteAllCategory = (req,res) => {
    categorySchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All category",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All category deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All category",
            status: 400,
            error: err,
      })
    })
  }

  exports.deleteCategoryById = (req,res) => {
    const id = req.params.id;
    console.log(id);
    categorySchema.findOneAndDelete(
      {
        _id : id,
      },
    )
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the category",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "category deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the category",
            status: 400,
            error: err,
      })
    })
  }