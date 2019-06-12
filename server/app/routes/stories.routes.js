module.exports = app => {
  const controller = require('../controllers/stories.controller.js');
  //
  const {checkToken, hasRole} = require('../middleware/');
  const {ADMIN} = require('../roles');
  //
  app.post('/stories', controller.create);
  app.get('/stories', controller.findAll);
  app.get('/stories/:storyId', controller.findOne);
  app.get('/topmood', controller.highestMood);
  //
  app.put('/stories/:storyId', controller.update);
  app.delete(
    '/stories/:storyId',
    checkToken,
    hasRole(ADMIN),
    controller.delete
  );
};
