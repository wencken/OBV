const Story = require('../models/story.model.js');

//CREATE
exports.create = (req, res) => {
  if (!req.body.description) {
    return res.status(500).send({err: 'description can not be empty'});
  }

  const story = new Story({
    description: req.body.description,
    city: req.body.city,
    moodId: req.body.moodId,
    rate: req.body.rate
  });

  story
    .save()
    .then(story => res.send(story))
    .catch(err => {
      res.status(500).send({error: err.story || 'Error'});
    });
};

exports.highestMood = async (req, res) => {
  try {
    const stories = await Story.find();
    const firstFilter = stories.reduce((a, b) => {
      const key = b['moodId'];

      if (!a[key]) {
        a[key] = 1;
      }
      a[key] ++;

      // this.stories.filter(story => story.id === maxMoodId);

      // console.log(this.rootStore.moodStore.resolveMood(maxMoodId));

      // const maxMood = this.rootStore.moodStore.resolveMood(maxMoodId);
      // console.log(maxMood.name);

      return a;
    }, {});
    const maxMoodId = Object.keys(firstFilter).reduce((c, d) =>
      firstFilter[c] > firstFilter[d] ? c : d
    );
    //console.log(maxMoodId);
    return maxMoodId;
    //console.log(first);

    //return Object.keys(first).reduce((c, d) => (first[c] > first[d] ? c : d));
    //return first;
  } catch (err) {
    res.status(500).send({err: err.story || 'Error'});
  }
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
        moodId: req.body.moodId,
        rate: req.body.rate
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
