const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js');

const tokenCookie = {
  maxAge: 1800000,
  sameSite: true
};
const signatureCookie = {
  maxAge: 86400000,
  httpOnly: true,
  sameSite: true
};

//INLOGGEN
exports.login = async (req, res) => {
  //username & paswoord uitlezen
  const {email, password} = req.body;
  if (!email || !password) {
    return res.status(400).send({error: 'email and password are required'});
  }
  try {
    //user ophalen adhv username
    const user = await User.findOne({email});
    if (!user) {
      res.status(401).send({error: 'incorrect email or password'});
    } else {
      //paswoord controleren
      const isPasswordCorrect = await user.validPassword(password);
      if (isPasswordCorrect) {
        const {_id, name, roles} = user;
        //JWT aanmaken
        const token = jwt.sign({_id, name, roles}, process.env.SECRET, {
          expiresIn: '24h'
        });
        //JWT splitten
        const parts = token.split('.');
        const signature = parts.splice(2);
        //2 cookies toevoegen + response sturen
        res
          .cookie('token', parts.join('.'), tokenCookie)
          .cookie('signature', signature, signatureCookie)
          .sendStatus(200);
      } else {
        res.status(401).send({
          success: false,
          message: 'Incorrect email or password'
        });
      }
    }
  } catch (error) {
    res
      .status(500)
      .send({message: 'Internal error, please try again', error});
  }
};

//UITLOGGEN
exports.logout = (req, res) => {
  res
    .clearCookie('token', tokenCookie)
    .clearCookie('signature', signatureCookie)
    .sendStatus(200);
};

//REGISTREREN
exports.register = (req, res) => {
  const {email, password, name} = req.body;
  const user = new User({email, password, name});
  user.save(err => {
    if (err) {
      res.status(500).send('Error registering new user please try again.');
    } else {
      res.status(200).send('Welcome to the club!');
    }
  });
};
