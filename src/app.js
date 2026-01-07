const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));
app.use("/api/interviews", require("./routes/InterviewRoutes"));


app.get("/", (req, res) => {
  res.send("Job Tracker API is running");
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const { errorHandler } = require("./middlewares/errorMiddleware");

// error handler middleware
app.use(errorHandler);

