import Joi from 'joi';
const { object, string, number, array } = Joi;

export function userValidate(data) {
  const individualSchema = object().keys({
    date: string().required().label('Tanggal Mengerjakan'),
    time: string().required().label('Waktu Pengerjaan'),
    name: string().required().label('Nama'),
    age: number().required().label('Usia'),
    gender: string().required().label('Jenis Kelamin'),
    device: string().required().label('Perangkat'),
    type: string().required().label('Tingkat Kesulitan'),
    totalErrorScore: number().required().label('Jml Skor Kesalahan'),
    errorScoreStatus: string().required().label('Status Skor Kesalahan'),
    blindCheck: string().required().label('Jenis Buta Warna'),
    comparisonResult: array().items(
      object({
        _id: string().required(),
        comparison: string().required().label('Nilai Komparasi'),
      }),
    ),
    discriminantResult: array().items(
      object({
        _id: string().required(),
        discriminant: number().required().label('Nilai Perbedaan'),
      }),
    ),
  });

  return individualSchema.validate(data);
}
export function groupValidate(data) {
  const groupSchema = object().keys({
    date: string().required().label('Tanggal Pembuatan'),
    email: string().required().label('Email Pembuat'),
    groupName: string().required().label('Nama Grup'),
    groupInitial: string().required().label('Initial Grup'),
    maxScore: number().required().label('Skor Maksimal'),
    type: string().required().label('Tingkat Kesulitan'),
    device: string().allow(''),
    code: array().items(
      object({
        _id: string().required(),
        key: string().required(),
      }),
    ),
  });

  return groupSchema.validate(data);
}
export function clientValidate(data) {
  const clientSchema = object().keys({
    date: string().required().label('Tanggal Mengerjakan'),
    time: string().required().label('Waktu Pengerjaan'),
    name: string().required().label('Nama'),
    age: number().required().label('Usia'),
    gender: string().required().label('Jenis Kelamin'),
    device: string().required().label('Perangkat'),
    type: string().required().label('Tingkat Kesulitan'),
    totalErrorScore: number().required().label('Jml Skor Kesalahan'),
    errorScoreStatus: string().required().label('Status Skor Kesalahan'),
    blindCheck: string().required().label('Jenis Buta Warna'),
    comparisonResult: array().items(
      object({
        _id: string().required(),
        comparison: string().required().label('Nilai Komparasi'),
      }),
    ),
    discriminantResult: array().items(
      object({
        _id: string().required(),
        discriminant: number().required().label('Nilai Perbedaan'),
      }),
    ),
    status: string().required().label('Status'),
  });

  return clientSchema.validate(data);
}
export function articleValidate(data) {
  const articleSchema = object().keys({
    title: string().required().label('Judul Artikel'),
    author: string().required().label('Penulis Artikel'),
    year: string().required().label('Tahun Publikasi'),
    category: string().required().label('Jenis Artikel'),
    description: string()
      .max(600)
      .required()
      .label('Penjelasan Singkat Artikel'),
    url: string().required().label('Tautan Artikel'),
    urlPage: string().required().label('Penyedia Artikel'),
  });

  return articleSchema.validate(data);
}
