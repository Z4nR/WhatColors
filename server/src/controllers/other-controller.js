const Group = require("../models/group-test");
const Client = require("../models/client");
const Individual = require("../models/individual");

module.exports = {
  deleteAllTestData: async (req, res) => {
    try {
      await Group.deleteMany({});
      await Client.deleteMany({});
      await Individual.deleteMany({});
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan pada Server" });
    }
  },
};
