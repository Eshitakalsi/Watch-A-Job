const mongoose = require("mongoose");
const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide comapny name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide a position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["Interview", "Declined", "Pending"],
      default: "Pending",
    },
    //TYING JOB MODEL TO USER MODEL and reference to User model
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide User"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
