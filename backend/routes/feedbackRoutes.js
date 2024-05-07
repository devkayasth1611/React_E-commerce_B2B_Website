const express = require('express');
const router = express.Router();
const feedbackController = require('../controller/feedbackController'); 

router.post('/feedback', feedbackController.createFeedback);
router.get('/feedback', feedbackController.getAllFeedback);
router.get("/feedback/:id", feedbackController.getFeedbackById);
router.post("/feedback/:id", feedbackController.updateFeedbackById);
router.delete("/feedback/:id", feedbackController.deleteFeedbackById);
router.delete("/feedback", feedbackController.deleteAllFeedback);

module.exports = router;