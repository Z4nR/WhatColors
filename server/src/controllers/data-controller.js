const Group = require('../models/group-test');
const Client = require('../models/client');
const Individual = require('../models/individual');
const { startSession } = require('mongoose');

module.exports = {
  searchAllTestData: async (req, res) => {
    try {
      const { name } = req.query;

      const client = await Client.find({ name: { $regex: name } }).sort({
        totalErrorScore: 1,
      });

      const clientSearchResult = client.map((key) => {
        const name = key.name;
        const date = key.date;
        const score = key.totalErrorScore;
        const time = key.time;
        const blindCheck = key.blindCheck;
        const status = key.status;
        return {
          name: name,
          date: date,
          score: score,
          time: time,
          blindCheck: blindCheck,
          status: status,
        };
      });

      const individual = await Individual.find({
        name: { $regex: name },
      }).sort({
        totalErrorScore: 1,
      });

      const individualSearchResult = individual.map((key) => {
        const name = key.name;
        const date = key.date;
        const score = key.totalErrorScore;
        const blindCheck = key.blindCheck;
        const status = key.errorScoreStatus;
        return {
          name: name,
          date: date,
          score: score,
          blindCheck: blindCheck,
          status: status,
        };
      });

      const group = await Group.find({ groupName: { $regex: name } }).sort({
        groupName: 1,
      });

      const groupSearchResult = group.map((key) => {
        const name = key.groupName;
        const initial = key.groupInitial;
        const date = key.date;
        const score = key.maxScore;
        const type = key.type;
        const clients = key.clients.length;
        return {
          name: name,
          initial: initial,
          date: date,
          score: score,
          type: type,
          clients: clients,
        };
      });

      const searchResult = {
        client: clientSearchResult,
        individual: individualSearchResult,
        room: groupSearchResult,
      };

      res.status(200).send(searchResult);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan pada Server' });
    }
  },

  deleteAllTestData: async (req, res) => {
    try {
      await Group.deleteMany({});
      await Client.deleteMany({});
      await Individual.deleteMany({});
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan pada Server' });
    }
  },

  deleteGroupById: async (req, res) => {
    try {
      const { id } = req.params;

      if (!id) return res.status(404).send({ message: 'Grup tidak ditemukan' });

      const session = await startSession();
      session.startTransaction();

      const data = await Group.findById(id);

      await Client.deleteMany({
        _id: { $in: data.clients },
      });

      await Group.findByIdAndDelete(id);

      await session.commitTransaction();
      session.endSession();

      res
        .status(200)
        .json({ message: 'Grup dan Data Peserta berhasil dihapus' });
    } catch (error) {
      console.log(error);
      await session.abortTransaction();
      session.endSession();
      res.status(500).send({ message: 'Terjadi Kesalahan pada Server' });
    }
  },
};
