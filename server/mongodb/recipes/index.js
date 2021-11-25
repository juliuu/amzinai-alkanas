const { ObjectId } = require('mongodb');
const { __getSort, __parseTimestamp } = require('../utils');

const findMany = async (recipesCollection, params) => {
  try {
    const query = params.type ? { type: params.type } : {};
    const result = await recipesCollection
      .find(query)
      .sort(__getSort(params.sort))
      .skip(params.offset ? Number(params.offset) : 0)
      .limit(params.size ? Number(params.size) : 0)
      .toArray();

    result.map((item) => (item.timestamp = __parseTimestamp(item.timestamp)));

    return result;
  } catch (error) {
    console.error(`[MONGO_DB][RECIPES][FIND_MANY] Failed to fetch recipe data. ERROR --> ${error}`);
  }
};

const findAll = async (recipesCollection, params) => {
  try {
    const result = await recipesCollection
      .aggregate([
        {
          $lookup: {
            from: 'comments',
            let: { join_on: '$_id' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ['$articleId', '$$join_on'],
                  },
                },
              },
              {
                $count: 'count',
              },
            ],
            as: 'comments',
          },
        },
        {
          $lookup: {
            from: 'ratings',
            let: { join_on: '$_id' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ['$articleId', '$$join_on'],
                  },
                },
              },
              {
                $group: {
                  _id: '$articleId',
                  rating: { $avg: '$rating' },
                },
              },
              {
                $project: {
                  _id: 0,
                },
              },
            ],
            as: 'rating',
          },
        },
        {
          $project: {
            heading: 1,
            timestamp: 1,
            comments: 1,
            rating: 1,
          },
        },
        {
          $sort: __getSort(params.sort),
        },
      ])
      .toArray();

    result.map((item) => {
      item.timestamp = __parseTimestamp(item.timestamp);
      if (item.comments.length === 0) item.comments.push({ count: 0 });
    });

    return result;
  } catch (error) {
    console.error(`[MONGO_DB][RECIPES][FIND_ALL] Failed to fetch data. ERROR --> ${error}`);
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

const deleteOne = async (recipesCollection, params) => {
  try {
    const result = await recipesCollection.deleteOne({ _id: ObjectId(params.id) });
    return result;
  } catch (error) {
    console.error(`[MONGO_DB][RECIPES][DELETE_ONE] Failed to delete data. ERROR --> ${error}`);
    return { error };
  }
};

module.exports = {
  findMany,
  findAll,
  findTotal,
  findOne,
  deleteOne,
};
