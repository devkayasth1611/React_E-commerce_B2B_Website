const feedbackSchema = require('../model/feedbackModel')

exports.createFeedback = (req,res) => {
    const feedback = new feedbackSchema(req.body);
    feedback.save()
    .then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving feedback",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "feedback Saved Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving feedback",
                status: 400,
                error: err,
        });
    })
}

exports.getAllFeedback = (req,res) => {
    feedbackSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching feedback",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "Feedback fetched Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching feedback",
                status: 400,
                error: err,
        });
    })
}

exports.getFeedbackById = (req, res) => {
    // const proId = req.params.id;
    feedbackSchema
      .findById(req.params.id)
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while fetching the feedback.",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Feedback fetched successfully.",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while fetching the feedback.",
          status: 400,
          error: err,
        });
      });
  };
  
  exports.updateFeedbackById = (req, res) => {
    feedbackSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the feedback",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Feedback updated successfully",
            status: 200,
            data: data,
          });
        }
      }).catch((err) => {
        res.json({
            message: "Something went wrong while deleting the All feedback",
            status: 400,
            error: err,
        })
      })
  };

  exports.deleteAllFeedback = (req,res) => {
    feedbackSchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All feedback",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Feedback deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All feedback",
            status: 400,
            error: err,
      })
    })
  }

  exports.deleteFeedbackById = (req,res) => {
    const id = req.params.id;
    console.log(id);
    feedbackSchema.findOneAndDelete(
      {
        _id : id,
      },
    )
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the feedback",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "Feedback deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the feedback",
            status: 400,
            error: err,
      })
    })
  }