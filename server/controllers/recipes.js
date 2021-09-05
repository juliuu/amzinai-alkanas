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

module.exports = {
  findMany,
  findTotal,
};