const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: "Enter the name of the task"
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  isComplete: {
    type: Boolean,
    default: false,
  }
});

module.exports = mongoose.model("Task", TaskSchema)