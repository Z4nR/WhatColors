import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import db from './db.js';
import route from './routes.js';
import { deleteAllTestData } from './controllers/data-controller.js';

import nodeCron from 'node-cron';
const { schedule } = nodeCron;

import bodyParser from 'body-parser';
const { json } = bodyParser;

const app = express();

const port = process.env.PORT || 5000;

// Middleware
app.use(json());

const origin = process.env.ORIGIN.split(',');

console.log(origin);

app.use(
  cors({
    origin,
    methods: ['GET', 'POST', 'DELETE'],
  }),
);

// Delete Daily Schedule
const cronConfig = {
  scheduled: true,
  timezone: 'Asia/Jakarta',
};

const deleteSchedule = schedule('59 23 * * 6', deleteAllTestData, cronConfig);

deleteSchedule.start();

// Route
app.use('/v1', route);

// DB Connection
db();

// Listen Port
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
