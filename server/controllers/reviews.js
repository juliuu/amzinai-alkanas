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

const findAll = async (req, res) => {
  const params = req.params;
  const result = await MongoDbService.reviews.findAll(params);
  return res.json(result);
};

const insertOne = async (req, res) => {
  const body = req.body;
  const result = await MongoDbService.reviews.insertOne(body);

  if (result.error) return res.status(500).json({});
  return res.status(200).json(result);
};

const deleteOne = async (req, res) => {
  const params = req.params;
  const result = await MongoDbService.reviews.deleteOne(params);

  if (result.error) return res.status(500).json({});
  return res.status(200).json(result);
}

module.exports = {
  findMany,
  findAll,
  findTotal,
  findTop,
  findOne,
  insertOne,
  deleteOne
};
