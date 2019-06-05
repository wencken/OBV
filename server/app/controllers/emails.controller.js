const Email = require('../models/email.model.js');

//CREATE
exports.create = (req, res) => {
  if (!req.body.email) {
    return res.status(500).send({err: 'email can not be empty'});
  }

  const email = new Email({
    email: req.body.email
  });

  email
    .save()
    .then(email => res.send(email))
    .catch(err => {
      res.status(500).send({error: err.email || 'Error'});
    });
};

//FINDALL
exports.findAll = async (req, res) => {
  try {
    const emails = await Email.find();
    res.send(emails);
  } catch (err) {
    res.status(500).send({err: err.email || 'Error'});
  }
};
