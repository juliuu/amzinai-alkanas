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

module.exports = {
  findMany,
  findTotal,
};
