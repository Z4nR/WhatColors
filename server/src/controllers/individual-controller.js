const Individual = require('../models/individual');
const { userValidate } = require('../utils/validate');

module.exports = {
  newUser: async (req, res) => {
    try {
      const { error } = userValidate(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });

      const name = await Individual.findOne({
        name: req.body.name,
      });
      if (name)
        return res.status(409).send({ message: 'Nama sudah digunakan!' });

      const data = await new Individual(req.body).save();
      res.status(201).send({ id: data._id });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan pada Server' });
    }
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params;

      const data = await Individual.findById(id);

      if (!data)
        return res.status(404).send({ message: 'Data tidak ditemukan' });

      res.status(202).send(data);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: 'Terjadi Kesalahan pada Server', status: 500 });
    }
  },
};
