module.exports = app => {
  const controller = require('../controllers/moods.controller.js');
  app.post('/moods', controller.create);
  app.get('/moods', controller.findAll);
  app.get('/moods/:moodId', controller.findOne);
  app.put('/moods/:moodId', controller.update);
};
