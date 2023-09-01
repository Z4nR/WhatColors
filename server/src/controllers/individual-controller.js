const Individual = require("../models/individual");
const { userValidate } = require("../utils/validate");

module.exports = {
  newUser: async (req, res) => {
    try {
      const { error } = userValidate(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });

      const fullname = await User.findOne({ fullName: req.body.fullName });
      if (fullname)
        return res.status(409).send({ message: "Nama sudah digunakan!" });

      const data = await new Individual(req.body).save();
      res.status(201).send({ data: data._id });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan pada Server" });
    }
  },

  getUserbyId: async (req, res) => {
    try {
      const { id } = req.params;

      const data = await Individual.findById(id);

      res.status(202).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan pada Server" });
    }
  },
};
