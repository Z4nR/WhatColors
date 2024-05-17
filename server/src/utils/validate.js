const Joi = require('joi');

module.exports = {
  userValidate: (data) => {
    const individualSchema = Joi.object().keys({
      date: Joi.string().required().label('Tanggal Mengerjakan'),
      time: Joi.string().required().label('Waktu Pengerjaan'),
      name: Joi.string().required().label('Nama'),
      age: Joi.number().required().label('Usia'),
      gender: Joi.string().required().label('Jenis Kelamin'),
      device: Joi.string().required().label('Perangkat'),
      type: Joi.string().required().label('Tingkat Kesulitan'),
      totalErrorScore: Joi.number().required().label('Jml Skor Kesalahan'),
      errorScoreStatus: Joi.string().required().label('Status Skor Kesalahan'),
      blindCheck: Joi.string().required().label('Jenis Buta Warna'),
      comparisonResult: Joi.array().items(
        Joi.object({
          _id: Joi.string().required(),
          comparison: Joi.string().required().label('Nilai Komparasi'),
        })
      ),
      discriminantResult: Joi.array().items(
        Joi.object({
          _id: Joi.string().required(),
          discriminant: Joi.number().required().label('Nilai Perbedaan'),
        })
      ),
    });

    return individualSchema.validate(data);
  },

  groupValidate: (data) => {
    const groupSchema = Joi.object().keys({
      date: Joi.string().required().label('Tanggal Pembuatan'),
      email: Joi.string().required().label('Email Pembuat'),
      groupName: Joi.string().required().label('Nama Grup'),
      groupInitial: Joi.string().required().label('Initial Grup'),
      maxScore: Joi.number().required().label('Skor Maksimal'),
      type: Joi.string().required().label('Tingkat Kesulitan'),
      device: Joi.string().allow(''),
      code: Joi.array().items(
        Joi.object({
          _id: Joi.string().required(),
          key: Joi.string().required(),
        })
      ),
    });

    return groupSchema.validate(data);
  },

  clientValidate: (data) => {
    const clientSchema = Joi.object().keys({
      date: Joi.string().required().label('Tanggal Mengerjakan'),
      time: Joi.string().required().label('Waktu Pengerjaan'),
      name: Joi.string().required().label('Nama'),
      age: Joi.number().required().label('Usia'),
      gender: Joi.string().required().label('Jenis Kelamin'),
      device: Joi.string().required().label('Perangkat'),
      type: Joi.string().required().label('Tingkat Kesulitan'),
      totalErrorScore: Joi.number().required().label('Jml Skor Kesalahan'),
      errorScoreStatus: Joi.string().required().label('Status Skor Kesalahan'),
      blindCheck: Joi.string().required().label('Jenis Buta Warna'),
      comparisonResult: Joi.array().items(
        Joi.object({
          _id: Joi.string().required(),
          comparison: Joi.string().required().label('Nilai Komparasi'),
        })
      ),
      discriminantResult: Joi.array().items(
        Joi.object({
          _id: Joi.string().required(),
          discriminant: Joi.number().required().label('Nilai Perbedaan'),
        })
      ),
      status: Joi.string().required().label('Status'),
    });

    return clientSchema.validate(data);
  },

  articleValidate: (data) => {
    const articleSchema = Joi.object().keys({
      title: Joi.string().required().label('Judul Artikel'),
      author: Joi.string().required().label('Penulis Artikel'),
      year: Joi.string().required().label('Tahun Publikasi'),
      category: Joi.string().required().label('Jenis Artikel'),
      description: Joi.string()
        .max(600)
        .required()
        .label('Penjelasan Singkat Artikel'),
      url: Joi.string().required().label('Tautan Artikel'),
      urlPage: Joi.string().required().label('Penyedia Artikel'),
    });

    return articleSchema.validate(data);
  },
};
