module.exports = app => {
  const controller = require('../controllers/stories.controller.js');
  app.post('/stories', controller.create);
  app.get('/stories', controller.findAll);
};
