const Group = require("../models/group-test");
const { generateCode } = require("../utils/group-helper");
const { groupValidate } = require("../utils/validate");
const mailer = require("nodemailer");
const handlebars = require("handlebars");
const path = require("path");
const fs = require("fs");

module.exports = {
  newGroup: async (req, res) => {
    try {
      const { error } = groupValidate(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });

      const initial = await Group.findOne({
        groupInitial: req.body.groupInitial,
      });
      if (initial)
        return res
          .status(409)
          .send({ message: "Inisial Nama sudah digunakan!" });

      const generate = generateCode(5);
      const group = { ...req.body, code: generate };

      const data = await new Group(group).save();
      res.status(201).send({ id: data._id });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan pada Server" });
    }
  },

  sendEmailCode: async (req, res) => {
    try {
      const { id } = req.params;
      const group = await Group.findById(id);

      const filePath = path.join(__dirname, "../utils/email-template.html");
      const source = fs.readFileSync(filePath, "utf-8").toString();

      const template = handlebars.compile(source);
      const replacements = {
        adminCode: group.code[0].key,
        clientCode: group.code[1].key,
      };
      const htmlMsg = template(replacements);

      const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },
      });
      const mailOptions = {
        from: process.env.EMAIL,
        to: group.email,
        subject: group.groupInitial + " Code Verification",
        html: htmlMsg,
      };
      smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res.status(400).send({ message: error });
        } else {
          console.log(info);
        }
      });

      res.status(200).send({ message: "Kode Email Berhasil Dikirim" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan pada Server" });
    }
  },

  verifyRole: async (req, res) => {
    try {
      const { codeVerify } = req.params;

      const findCode = await Group.find({
        $or: [
          {
            code: {
              _id: "01",
              key: codeVerify,
            },
          },
          {
            code: {
              _id: "11",
              key: codeVerify,
            },
          },
        ],
      });

      if (findCode.length === 0)
        return res.status(409).send({ message: "Kode Tidak Ditemukan" });

      const data = { ...findCode };
      const admin = data[0].code[0].key;
      const id = data[0]._id;

      let isAdmin;
      admin === codeVerify ? (isAdmin = true) : (isAdmin = false);

      res.status(200).send({ admin: isAdmin, id: id });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan pada Server" });
    }
  },

  getGroupById: async (req, res) => {
    try {
      const { id } = req.params;

      const group = await Group.findById(id);

      if (!group)
        return res.status(404).send({ message: "Data tidak ditemukan" });

      const data = {
        name: group.groupName,
        initial: group.groupInitial,
        date: group.date,
        type: group.type,
        device: group.device,
        max: group.maxScore,
      };

      res.status(202).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan pada Server" });
    }
  },

  getClientByGroup: async (req, res) => {
    try {
      const { id } = req.params;

      const group = await Group.findById(id).populate("clients");
      if (!group)
        return res.status(404).send({ message: "Data tidak ditemukan" });

      const data = group.clients;

      res.status(202).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan pada Server" });
    }
  },
};
