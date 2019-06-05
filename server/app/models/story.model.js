const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const StorySchema = mongoose.Schema(
  {
    description: String,
    city: String,
    moodId: ObjectId,
    rate: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Story', StorySchema);
