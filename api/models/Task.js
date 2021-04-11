const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: "Enter the name of the task"
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending'],
  }
});

module.exports = mongoose.model("Task", TaskSchema)