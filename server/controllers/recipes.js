const MongoDbService = require('../mongodb');

const findMany = async (req, res) => {
  const params = req.query;
  const result = await MongoDbService.recipes.findMany(params);
  return res.json(result);
};

const findTotal = async (req, res) => {
  const params = req.query;
  const result = await MongoDbService.recipes.findTotal(params);
  return res.json(result);
};

const findOne = async (req, res) => {
  const params = req.params;
  const result = await MongoDbService.recipes.findOne(params);
  return res.json(result);
};

const findAll = async (req, res) => {
  const params = req.params;
  const result = await MongoDbService.recipes.findAll(params);
  return res.json(result);
};

module.exports = {
  findMany,
  findAll,
  findTotal,
  findOne,
};
