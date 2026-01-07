const Job = require("../models/Job");

// CREATE JOB
const createJob = async (req, res) => {
  try {
    const { company, role, status } = req.body;

    if (!company || !role) {
      return res.status(400).json({ message: "Company and role are required" });
    }

    const job = await Job.create({
      user: req.user._id,
      company,
      role,
      status: status || "Applied",
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER JOBS
// GET USER JOBS WITH PAGINATION & FILTERING
const getJobs = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const query = { user: req.user._id };

    // filtering
    if (req.query.status) {
      query.status = req.query.status;
    }

    if (req.query.company) {
      query.company = req.query.company;
    }

    const totalJobs = await Job.countDocuments(query);

    const jobs = await Job.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.status(200).json({
      totalJobs,
      page,
      totalPages: Math.ceil(totalJobs / limit),
      jobs,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE JOB (status / role / company)
const updateJob = async (req, res) => {
  try {
    const job = await Job.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    job.company = req.body.company || job.company;
    job.role = req.body.role || job.role;
    job.status = req.body.status || job.status;

    const updatedJob = await job.save();
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE JOB
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    await job.deleteOne();
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
  res.status(500);
  throw new Error(error.message);
}
};



module.exports = {
  createJob,
  getJobs,
  updateJob,
  deleteJob,
};

