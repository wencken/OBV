module.exports = app => {
  const controller = require('../controllers/emails.controller.js');
  app.post('/emails', controller.create);
  app.get('/emails', controller.findAll);
};
