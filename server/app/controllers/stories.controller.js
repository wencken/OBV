const Story = require('../models/story.model.js');

//CREATE
exports.create = (req, res) => {
  if (!req.body.description) {
    return res.status(500).send({err: 'description can not be empty'});
  }

  const story = new Story({
    description: req.body.description,
    city: req.body.city
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
