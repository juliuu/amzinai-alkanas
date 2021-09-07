const { ObjectId } = require('mongodb');
const { __getSort } = require('../utils');

const findMany = async (recipesCollection, params) => {
  try {
    const query = params.type ? { type: params.type } : {};
    const result = await recipesCollection
      .find(query)
      .sort(__getSort(params.sort))
      .skip(Number(params.offset))
      .limit(Number(params.size))
      .toArray();

    return result;
  } catch (error) {
    console.error(`[MONGO_DB][RECIPES][FIND_MANY] Failed to fetch recipe data. ERROR --> ${error}`);
  }
};

const findTotal = async (recipesCollection, params) => {
  try {
    const query = params.type ? { type: params.type } : {};
    const result = await recipesCollection.count(query);
    return result;
  } catch (error) {
    console.error(`[MONGO_DB][RECIPES][FIND_TOTAL]Failed to fetch data. ERROR --> ${error}`);
  }
};

const findOne = async (recipesCollection, params) => {
  try {
    const result = await recipesCollection.findOne({ _id: ObjectId(params.id) });

    return result;
  } catch (error) {
    console.error(`[MONGO_DB][RECIPES][FIND_ONE] Failed to fetch data. ERROR --> ${error}`);
  }
};

module.exports = {
  findMany,
  findTotal,
  findOne,
};
