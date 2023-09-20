const { deleteAllTestData } = require("./controllers/other-controller");
const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  { Server } = require("socket.io"),
  cron = require("node-cron");
(app = express()), ((db = require("./db")), (route = require("./route")));

require("dotenv").config();

const env = process.env.NODE_ENV;
const port = process.env.PORT || 5000;

//Handling Console.log
if (env === "development") {
  console.log = function () {};
}

//Middleware
app.use(bodyParser.json());
app.use(cors({ origin: "*", methods: ["GET", "POST", "DELETE"] }));

//Delete Daily Schedule
const cronConfig = {
  scheduled: true,
  timezone: "Asia/Jakarta",
};

const deleteSchedule = cron.schedule(
  "59 23 * * 6",
  deleteAllTestData,
  cronConfig
);

deleteSchedule.start();

//Route
app.use("/v1", route);

//DB Connection
db();

//Listen Port
const server = app.listen(port, () => {
  console.log(`Litening on port ${port}...`);
});

//Web Socket
function onSocketConnect(io, socket) {
  socket.on("client-join", (data) => {
    io.emit("refresh-list", data);
  });
}

const io = new Server(server, { cors: { origin: "*" } });
io.on("connect", (socket) => onSocketConnect(io, socket));
