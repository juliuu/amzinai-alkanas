const { ObjectId } = require('mongodb');
const { __getSort, __parseTimestamp } = require('../utils');

const findMany = async (reviewsCollection, params) => {
  try {
    const query = params.type ? { type: params.type } : {};
    const result = await reviewsCollection
      .find(query)
      .sort(__getSort(params.sort))
      .skip(params.offset ? Number(params.offset) : 0)
      .limit(params.size ? Number(params.size) : 0)
      .toArray();

    result.map((item) => (item.timestamp = __parseTimestamp(item.timestamp)));

    return result;
  } catch (error) {
    console.error(`[MONGO_DB][REVIEWS][FIND_MANY] Failed to fetch review data. ERROR --> ${error}`);
  }
};

const findAll = async (reviewsCollection, params) => {
  try {
    const result = await reviewsCollection
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
          $project: {
            heading: 1,
            timestamp: 1,
            comments: 1,
            published: 1,
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
    console.error(`[MONGO_DB][REVIEWS][FIND_ALL] Failed to fetch data. ERROR --> ${error}`);
    return { error };
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
    const result = await reviewsCollection
      .find({ type: params.type })
      .sort({ rating: -1 })
      .limit(10)
      .toArray();
    return result;
  } catch (error) {
    console.error(`[MONGO_DB][REVIEWS][FIND_TOP] Failed to fetch data. ERROR --> ${error}`);
  }
};

const findOne = async (reviewsCollection, params) => {
  try {
    const data = await reviewsCollection.findOne({ _id: ObjectId(params.id) });

    const averageFoodScore =
      data.foodScores.reduce((acc, curr) => acc + curr.rating, 0) / data.foodScores.length;
    const averageRestaurantScore =
      data.restaurantScores.reduce((acc, curr) => acc + curr.rating, 0) / data.restaurantScores.length;
    const averageRating = Math.round((averageFoodScore + averageRestaurantScore) / 2);

    return { data, averageRating };
  } catch (error) {
    console.error(`[MONGO_DB][REVIEWS][FIND_ONE] Failed to fetch data. ERROR --> ${error}`);
  }
};

const insertOne = async (reviewsCollection, body) => {
  try {
    if (!body.heading || !body.dishes || !body.foodScores || !body.restaurantScores)
      return { error: 'Bad Request' };

    const document = {
      heading: body.heading,
      videoUrl: body.videoUrl || '',
      imgUrl: body.imgUrl || '',
      intro: body.intro || '',
      dishes: body.dishes,
      foodScores: body.foodScores,
      restaurantScores: body.restaurantScores,
      review: body.review || '',
      finalRemarks: body.finalRemarks || '',
      timestamp: Date.now(),
    };

    const result = await reviewsCollection.insertOne(document);

    return result;
  } catch (error) {
    console.error(`[MONGO_DB][REVIEWS][INSERT_ONE] Failed to insert data. ERROR --> ${error}`);
    return { error };
  }
};

const deleteOne = async (reviewsCollection, params) => {
  try {
    const result = await reviewsCollection.deleteOne({
      _id: ObjectId(params.id),
    });
    return result;
  } catch (error) {
    console.error(`[MONGO_DB][REVIEWS][DELETE_ONE] Failed to delete data. ERROR --> ${error}`);
    return { error };
  }
};

const updateOne = async (reviewsCollection, params, body) => {
  try {
    const result = await reviewsCollection.updateOne({ _id: ObjectId(params.id) }, { $set: body });
    return result;
  } catch (error) {
    console.error(`[MONGO_DB][REVIEWS][UPDATE_ONE] Failed to update data. Error --> ${error}`);
    return { error };
  }
};

module.exports = {
  findMany,
  findAll,
  findTotal,
  findTop,
  findOne,
  insertOne,
  deleteOne,
  updateOne,
};
