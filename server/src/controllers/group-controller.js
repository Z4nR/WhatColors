const Group = require("../models/group-test");
const { generateCode } = require("../utils/group-helper");
const { groupValidate } = require("../utils/validate");

module.exports = {
  newGroup: async (req, res) => {
    try {
      const { error } = groupValidate(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });

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

      const generate = generateCode(7);
      const group = { ...req.body, code: generate };

      const data = await new Group(group).save();
      res.status(201).send({ message: "Grup berhasil dibuat" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan pada Server" });
    }
  },
};
