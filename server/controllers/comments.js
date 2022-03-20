const MongoDbService = require('../mongodb');

const findMany = async (req, res) => {
  const params = req.params;
  const query = req.query;
  const result = await MongoDbService.comments.findMany({ ...params, ...query });

  if (result.error) return res.status(500).json({});
  return res.status(200).json(result);
};

const insertOne = async (req, res) => {
  const body = req.body;
  const result = await MongoDbService.comments.insertOne(body);

  if (result.error) return res.status(500).json({});
  return res.status(200).json(result);
};

module.exports = {
  findMany,
  insertOne,
};
