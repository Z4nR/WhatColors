const Group = require("../models/group-test");
const { generateCode } = require("../utils/group-helper");
const { groupValidate } = require("../utils/validate");
const mailer = require("nodemailer");
const handlebars = require("handlebars");
const smtp = require("nodemailer-smtp-transport");
const path = require("path");
const fs = require("fs");
const { log } = require("console");

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

      const username = process.env.SMTP_USERNAME || null;
      const password = process.env.SMTP_PASSWORD || null;
      if (!username || !password) {
        throw new Error("SMTP_USERNAME and SMTP_PASSWORD must be set");
      }

      const filePath = path.join(__dirname, "../utils/email-template.html");
      const source = fs.readFileSync(filePath, "utf-8").toString();

      const template = handlebars.compile(source);
      const replacements = {
        adminCode: group.code[0].key,
        clientCode: group.code[1].key,
      };
      const htmlMsg = template(replacements);

      const smtpTransport = mailer.createTransport(
        smtp({
          service: "gmail",
          auth: {
            user: username,
            pass: password,
          },
        })
      );
      const mailOptions = {
        from: process.env.EMAIL,
        to: group.email,
        subject: group.groupInitial + " Kode Verifikasi",
        html: "Testing",
      };
      const response = await smtpTransport.sendMail(mailOptions);

      console.log(response);

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
            code: {
              _id: "11",
              key: codeVerify,
            },
          },
        ],
      });

      if (!findCode)
        return res.status(409).send({ message: "Kode Tidak Ditemukan" });

      const admin = findCode[0].code[0].key;
      const id = findCode[0]._id;

      let isAdmin;
      admin === codeVerify ? (isAdmin = true) : (isAdmin = false);

      res.status(200).send({ admin: isAdmin, id: id });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan pada Server" });
    }
  },
};
