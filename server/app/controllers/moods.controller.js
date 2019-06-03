const Mood = require('../models/mood.model.js');

//CREATE
exports.create = (req, res) => {
  if (!req.body.name) {
    return res.status(500).send({err: 'name can not be empty'});
  }

  const mood = new Mood({
    name: req.body.name
  });

  mood
    .save()
    .then(mood => res.send(mood))
    .catch(err => {
      res.status(500).send({error: err.mood || 'Error'});
    });
};

//FINDALL
exports.findAll = async (req, res) => {
  try {
    const moods = await Mood.find();
    res.send(moods);
  } catch (err) {
    res.status(500).send({err: err.mood || 'Error'});
  }
};

//FINDONE
exports.findOne = async (req, res) => {
  try {
    const mood = await Mood.findById(req.params.moodId);
    if (mood) {
      res.send(mood);
    } else {
      res.status(404).send('No mood found');
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
  if (!req.body.name) {
    return res.status(400).send('name mag niet leeg zijn');
  }

  try {
    const mood = await Mood.findByIdAndUpdate(
      req.params.moodId,
      {
        name: req.body.name
      },
      {
        new: true
      }
    );

    if (!mood) {
      return res.status(404).send('No mood found');
    }
    res.send(mood);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(417).send('Geen geldig ID');
    }
    return res.status(500).send(err);
  }
};
