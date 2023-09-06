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
      comparisonResults: Joi.array().items(
        Joi.object({
          _id: Joi.string().required(),
          comparison: Joi.string().required().label("Nilai Komparasi"),
        })
      ),
      discriminantResults: Joi.array().items(
        Joi.object({
          _id: Joi.string().required(),
          discriminant: Joi.number().required().label("Nilai Perbedaan"),
        })
      ),
    });

    return individualSchema.validate(data);
  },
};
