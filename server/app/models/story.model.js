const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const StorySchema = mongoose.Schema(
  {
    rate: Number,
    description: String,
    city: String,
    moodId: ObjectId
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Story', StorySchema);
