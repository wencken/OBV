const Story = require('../models/story.model.js');

//CREATE
exports.create = (req, res) => {
  if (!req.body.description) {
    return res.status(500).send({err: 'description can not be empty'});
  }

  const story = new Story({
    description: req.body.description,
    city: req.body.city,
    moodId: req.body.moodId
  });

  story
    .save()
    .then(story => res.send(story))
    .catch(err => {
      res.status(500).send({error: err.story || 'Error'});
    });
};

//FINDALL
exports.findAll = async (req, res) => {
  try {
    const stories = await Story.find();
    res.send(stories);
  } catch (err) {
    res.status(500).send({err: err.story || 'Error'});
  }
};

//FINDONE
exports.findOne = async (req, res) => {
  try {
    const story = await Story.findById(req.params.storyId);
    if (story) {
      res.send(story);
    } else {
      res.status(404).send('No story found');
    }
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(500).send('Geen geldig ID');
    }
    return res.status(500).send(err);
  }
};

//UPDATE
exports.update = async (req, res) => {
  if (!req.body.description) {
    return res.status(400).send('description mag niet leeg zijn');
  }

  try {
    const story = await Story.findByIdAndUpdate(
      req.params.storyId,
      {
        description: req.body.description,
        city: req.body.city,
        moodId: req.body.moodId
      },
      {
        new: true
      }
    );

    if (!story) {
      return res.status(404).send('No story found');
    }
    res.send(story);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(417).send('Geen geldig ID');
    }
    return res.status(500).send(err);
  }
};

//DELETE
exports.delete = async (req, res) => {
  try {
    const story = await Story.findByIdAndRemove(req.params.storyId);
    if (!story) {
      return res.status(404).send('No story found');
    }
    res.send(story);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(417).send('Geen geldig ID');
    }
    return res.status(500).send(err);
  }
};
