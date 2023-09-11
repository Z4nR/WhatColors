const Joi = require("joi");

module.exports = {
  userValidate: (data) => {
    const individualSchema = Joi.object().keys({
      date: Joi.string().required().label("Tanggal Mengerjakan"),
      time: Joi.string().required().label("Waktu Pengerjaan"),
      name: Joi.string().required().label("Nama"),
      age: Joi.number().required().label("Usia"),
      gender: Joi.string().required().label("Jenis Kelamin"),
      device: Joi.string().required().label("Perangkat"),
      type: Joi.string().required().label("Tingkat Kesulitan"),
      totalErrorScore: Joi.number().required().label("Jml Skor Kesalahan"),
      errorScoreStatus: Joi.string().required().label("Status Skor Kesalahan"),
      blindCheck: Joi.string().required().label("Jenis Buta Warna"),
      comparisonResult: Joi.array().items(
        Joi.object({
          id: Joi.string().required(),
          comparison: Joi.string().required().label("Nilai Komparasi"),
        })
      ),
      discriminantResult: Joi.array().items(
        Joi.object({
          id: Joi.string().required(),
          discriminant: Joi.number().required().label("Nilai Perbedaan"),
        })
      ),
    });

    return individualSchema.validate(data);
  },

  groupValidate: (data) => {
    const groupSchema = Joi.object().keys({
      date: Joi.string().required().label("Tanggal Pembuatan"),
      email: Joi.string().required().label("Email Pembuat"),
      groupName: Joi.string().required().label("Nama Grup"),
      groupInitial: Joi.string().required().label("Initial Grup"),
      maxScore: Joi.number().required().label("Skor Maksimal"),
      type: Joi.string().required().label("Tingkat Kesulitan"),
      device: Joi.string().allow(""),
      code: Joi.array().items(
        Joi.object({
          id: Joi.string().required(),
          key: Joi.string().required(),
        })
      ),
    });

    return groupSchema.validate(data);
  },
};
