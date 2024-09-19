require('dotenv').config();
const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  cron = require('node-cron');
const app = express(),
  db = require('./db'),
  route = require('./routes');
const { deleteAllTestData } = require('./controllers/data-controller');

const port = process.env.PORT || 5000;

//Middleware
app.use(bodyParser.json());

const origin = process.env.ORIGIN.split(', ');
console.log(origin);

app.use(
  cors({
    origin: [process.env.URL_LOCAL, process.env.URL_ONLINE],
    methods: ['GET', 'POST', 'DELETE'],
  })
);

//Delete Daily Schedule
const cronConfig = {
  scheduled: true,
  timezone: 'Asia/Jakarta',
};

const deleteSchedule = cron.schedule(
  '59 23 * * 6',
  deleteAllTestData,
  cronConfig
);

deleteSchedule.start();

//Route
app.use('/v1', route);

//DB Connection
db();

//Listen Port
app.listen(port, () => {
  console.log(`Litening on port ${port}...`);
});
