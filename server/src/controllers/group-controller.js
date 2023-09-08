const Group = require("../models/group-test");

module.exports = {
  newGroup: async (req, res) => {
    try {
      const data = await new Group(req.body).save();
      res.status(201).send({ id: data._id });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan pada Server" });
    }
  },
};
