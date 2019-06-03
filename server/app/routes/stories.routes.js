module.exports = app => {
  const controller = require('../controllers/stories.controller.js');
  app.post('/stories', controller.create);
  app.get('/stories', controller.findAll);
  //
  app.get('/stories/:storyId', controller.findOne);
  app.put('/stories/:storyId', controller.update);
  app.delete('/stories/:storyId', controller.delete);
};
