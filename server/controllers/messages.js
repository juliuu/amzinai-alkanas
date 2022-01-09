const MongoDbService = require('../mongodb');

const insertOne = async (req, res) => {
  const body = req.body;
  const result = await MongoDbService.messages.insertOne(body);

  if (result.error) return res.status(500).json({});
  return res.status(200).json(result);
};

module.exports = {
  insertOne,
};
