const express = require("express");
const {
  addInterview,
  getInterviewsByJob,
} = require("../controllers/InterviewController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect, addInterview);
router.get("/:jobId", protect, getInterviewsByJob);

module.exports = router;
