module.exports = app => {
  const controller = require('../controllers/stories.controller.js');
  //
  const {checkToken, hasRole} = require('../middleware/');
  const {ADMIN} = require('../roles');
  //
  app.post('/stories', controller.create);
  app.get('/stories', controller.findAll);
  app.get('/stories/:storyId', controller.findOne);
  //
  app.put('/stories/:storyId', checkToken, hasRole(ADMIN), controller.update);
  app.delete(
    '/stories/:storyId',
    checkToken,
    hasRole(ADMIN),
    controller.delete
  );
};
