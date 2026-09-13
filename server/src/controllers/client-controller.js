import Group from '../models/group-test.js';
import Client from '../models/client.js';
import { clientValidate } from '../utils/validate.js';
import { startSession } from 'mongoose';

export async function newClient(req, res) {
  try {
    const { id } = req.params;

    const session = await startSession();
    session.startTransaction();

    const group = await Group.findById(id);
    if (!group)
      return res.status(404).send({ message: 'Grup tidak ditemukan' });

    const { error } = clientValidate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const name = await Client.findOne({
      name: req.body.name,
    });
    if (name)
      return res.status(409).send({ message: 'Nama Peserta sudah digunakan!' });

    const client = new Client(req.body);
    const data = await client.save();

    group.clients.push(client);
    await group.save();

    await session.commitTransaction();
    session.endSession();

    res.status(200).send({ id: data._id });
  } catch (error) {
    console.log(error);
    await session.abortTransaction();
    session.endSession();
    res.status(500).send({ message: 'Terjadi Kesalahan pada Server' });
  }
}

export async function getClientById(req, res) {
  try {
    const { id } = req.params;

    const data = await Client.findById(id);

    if (!data) return res.status(404).send({ message: 'Data tidak ditemukan' });

    res.status(202).send(data);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: 'Terjadi Kesalahan pada Server', status: 500 });
  }
}
