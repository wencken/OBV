const mongoose = require('mongoose');

const MoodSchema = mongoose.Schema(
  {
    name: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Mood', MoodSchema);
