const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => console.log('db connected'))
  .catch(e => {
    console.log('Error, exiting', e);
    process.exit();
  });

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build/')));

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({message: 'up and running'});
});

require('./app/routes/stories.routes.js')(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/', 'index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`Server luistert op poort ${process.env.PORT}`);
});