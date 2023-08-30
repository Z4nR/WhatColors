const express = require("express"),
  app = express();

require("dotenv").config();

const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV;

//Listen Port
app.listen(port, () => {
  console.log(`Litening on port ${port}...`);
});
