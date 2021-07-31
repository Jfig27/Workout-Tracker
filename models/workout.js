
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [
      {
          type: {
              type: String,
              trim: true,
              required: "The type of workout is required"
          },
          name: {
              type: String,
              trim: true,
              required: "Enter a name is required"
          },
          duration: {
              type: Number,
          },
          weight: {
              type: Number,
          },
          reps: {
              type: Number,
          },
          sets: {
              type: Number,
          },
      }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;