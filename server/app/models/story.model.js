const mongoose = require('mongoose');

const StorySchema = mongoose.Schema(
  {
    description: String,
    city: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Story', StorySchema);
