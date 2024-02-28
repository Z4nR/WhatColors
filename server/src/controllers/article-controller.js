const Article = require('../models/article');
const { articleValidate } = require('../utils/validate');

module.exports = {
  newArticle: async (req, res) => {
    try {
      const { error } = articleValidate(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });

      await new Article(req.body).save();
      res.status(201).send({ message: 'Artikel Baru Berhasil Ditambahkan' });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan pada Server' });
    }
  },

  getAllArticle: async (req, res) => {
    try {
      const article = await Article.find().sort({
        year: -1,
        author: 1,
        title: 1,
      });
      res.status(200).send(article);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan pada Server' });
    }
  },
};
