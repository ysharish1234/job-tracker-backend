const Interview = require("../models/Interview");
const Job = require("../models/Job");

// ADD INTERVIEW EXPERIENCE
const addInterview = async (req, res) => {
  try {
    const { jobId, round, experience, difficulty, techTags } = req.body;

    if (!jobId || !round || !experience) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    // check if job belongs to logged-in user
    const job = await Job.findOne({ _id: jobId, user: req.user._id });
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    const interview = await Interview.create({
      user: req.user._id,
      job: jobId,
      round,
      experience,
      difficulty,
      techTags,
    });

    res.status(201).json(interview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET INTERVIEWS FOR A JOB
const getInterviewsByJob = async (req, res) => {
  try {
    const interviews = await Interview.find({
      user: req.user._id,
      job: req.params.jobId,
    }).sort({ createdAt: -1 });

    res.status(200).json(interviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addInterview, getInterviewsByJob };
