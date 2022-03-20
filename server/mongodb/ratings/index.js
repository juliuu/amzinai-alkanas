const { ObjectId } = require('mongodb');

const findMany = async (ratingsCollection, params) => {
  try {
    const data = await ratingsCollection
      .aggregate([
        {
          $match: {
            articleId: ObjectId(params.id),
          },
        },
        {
          $group: {
            _id: '$articleId',
            avg: { $avg: '$rating' },
          },
        },
        {
          $project: { _id: 0, avg: { $round: ['$avg', 1] } },
        },
      ])
      .toArray();

    return data.length > 0 ? data[0].avg : 0;
  } catch (error) {
    console.error(`[MONGO_DB][RATINGS][FIND_MANY] Failed to fetch data. Error --> ${error}`);
    return { error };
  }
};

const findOne = async (ratingsCollection, params) => {
  try {
    const data = await ratingsCollection
      .find({ articleId: ObjectId(params.id), author: params.user_id })
      .toArray();

    return data.length > 0 ? data[0].rating : 0;
  } catch (error) {
    console.error(`[MONGO_DB][RATINGS][FIND_ONE] Failed to fetch data. Error --> ${error}`);
    return { error };
  }
};

const updateOne = async (ratingsCollection, body) => {
  try {
    if (!body.articleId || !body.author) return { error: 'Bad Request' };

    const document = {
      articleId: ObjectId(body.articleId),
      rating: body.rating || 0,
      author: body.author,
    };

    const result = await ratingsCollection.updateOne(
      { articleId: document.articleId, author: document.author },
      {
        $set: document,
      },
      { upsert: true }
    );

    return result;
  } catch (error) {
    console.error(`[MONGO_DB][RATINGS][INSERT_ONE] Failed to insert data. Error --> ${error}`);
    return { error };
  }
};
module.exports = {
  findMany,
  findOne,
  updateOne,
};
