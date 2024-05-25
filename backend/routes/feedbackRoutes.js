const express = require('express');
const router = express.Router();
const feedbackController = require('../controller/feedbackController'); 
const validate = require("../middleware/zodMiddleware");
const feedbackValidation = require("../util/feedbackValidation")

router.post('/feedback', validate(feedbackValidation) ,feedbackController.createFeedback);
router.get('/feedback', feedbackController.getAllFeedback);
router.get("/feedback/:id", feedbackController.getFeedbackById);
router.post("/feedback/:id", feedbackController.updateFeedbackById);
router.delete("/feedback/:id", feedbackController.deleteFeedbackById);
router.delete("/feedback", feedbackController.deleteAllFeedback);

module.exports = router;