const { ObjectId } = require('mongodb');
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

const findTop = async (reviewsCollection, params) => {
  try {
    const result = await reviewsCollection.find({ type: params.type }).sort({ rating: -1 }).limit(10).toArray();
    return result;
  } catch (error) {
    console.error(`[MONGO_DB][REVIEWS][FIND_TOP] Failed to fetch data. ERROR --> ${error}`);
  }
};

const findOne = async (reviewsCollection, params) => {
  try {
    const data = await reviewsCollection.findOne({ _id: ObjectId(params.id) });

    const averageFoodScore = data.foodScore.reduce((acc, curr) => acc + curr.rating, 0) / data.foodScore.length;
    const averageRestaurantScore = data.restaurantScore.reduce((acc, curr) => acc + curr.rating, 0) / data.restaurantScore.length;
    const averageRating = Math.round((averageFoodScore + averageRestaurantScore) / 2);

    return { data, averageRating };
  } catch (error) {
    console.error(`[MONGO_DB][REVIEWS][FIND_ONE] Failed to fetch data. ERROR --> ${error}`);
  }
};

module.exports = {
  findMany,
  findTotal,
  findTop,
  findOne,
};
