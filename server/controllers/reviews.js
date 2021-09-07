const MongoDbService = require('../mongodb');

const findMany = async (req, res) => {
  const params = req.query;
  const result = await MongoDbService.reviews.findMany(params);
  return res.json(result);
};

const findTotal = async (req, res) => {
  const params = req.query;
  const result = await MongoDbService.reviews.findTotal(params);
  return res.json(result);
};

const findTop = async (req, res) => {
  const params = req.query;
  const result = await MongoDbService.reviews.findTop(params);
  return res.json(result);
};

const findOne = async (req, res) => {
  const params = req.params;
  const result = await MongoDbService.reviews.findOne(params);
  return res.json(result);
};

module.exports = {
  findMany,
  findTotal,
  findTop,
  findOne,
};
