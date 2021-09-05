const { __getSort } = require('../utils');

const findMany = async (reviewsCollection, params) => {
  try {
    const query = params.type ? { type: params.type } : {};
    const result = await reviewsCollection
      .find(query)
      .sort(__getSort(params.sort))
      .skip(Number(params.offset))
      .limit(Number(params.size))
      .toArray();

    return result;
  } catch (error) {
    console.error(`[MONGO_DB][REVIEWS][FIND_MANY] Failed to fetch data. ERROR --> ${error}`);
  }
};

const findTotal = async (reviewsCollection, params) => {
  try {
    const query = params.type ? { type: params.type } : {};
    const result = await reviewsCollection.count(query);
    return result;
  } catch (error) {
    console.error(`[MONGO_DB][REVIEWS][FIND_TOTAL] Failed to fetch data. ERROR --> ${error}`);
  }
};

module.exports = {
  findMany,
  findTotal,
};
