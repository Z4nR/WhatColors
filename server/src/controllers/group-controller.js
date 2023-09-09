const Group = require("../models/group-test");

module.exports = {
  newGroup: async (req, res) => {
    try {
      const name = await Group.findOne({
        groupName: req.body.name,
      });
      if (name)
        return res.status(409).send({ message: "Nama Grup sudah digunakan!" });

      const initial = await Group.findOne({
        groupInitial: req.body.initial,
      });
      if (initial)
        return res
          .status(409)
          .send({ message: "Inisial Nama sudah digunakan!" });

      const data = await new Group(req.body).save();
      res.status(201).send({ id: data._id });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan pada Server" });
    }
  },
};
