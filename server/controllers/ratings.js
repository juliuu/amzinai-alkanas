const MongoDbService = require('../mongodb');

const findMany = async (req, res) => {
  const params = req.params;
  const result = await MongoDbService.ratings.findMany(params);
  return res.json(result);
};

const findOne = async (req, res) => {
  const params = req.params;
  const query = req.query;
  const result = await MongoDbService.ratings.findOne({ ...params, ...query });
  return res.json(result);
};

const updateOne = async (req, res) => {
  const body = req.body;
  const result = await MongoDbService.ratings.updateOne(body);

  if (result.error) return res.status(500).json({});
  return res.status(200).json(result);
};

module.exports = {
  findMany,
  findOne,
  updateOne,
};
