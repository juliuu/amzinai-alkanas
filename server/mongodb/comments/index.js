const { ObjectId } = require('mongodb');
const { __sort, __parseTimestamp } = require('../utils');

const findMany = async (commentsCollection, params) => {
  try {
    const [data, count] = await Promise.all([
      commentsCollection
        .aggregate([
          {
            $match: {
              articleId: ObjectId(params.id),
              commentId: { $exists: true },
            },
          },
          {
            $graphLookup: {
              from: 'comments',
              startWith: '$commentId',
              connectFromField: 'commentId',
              connectToField: 'replyId',
              as: 'replies',
            },
          },
          {
            $project: {
              articleId: 0,
              'replies.articleId': 0,
              'replies.replyId': 0,
            },
          },
          {
            $sort: { timestamp: -1 },
          },
        ])
        .toArray(),
      commentsCollection.count({
        articleId: ObjectId(params.id),
        commentId: { $exists: true },
      }),
    ]);

    data.map((comment) => {
      __sort(comment.replies, 'timestamp', -1);
      comment.timestamp = __parseTimestamp(comment.timestamp);
      comment.replies.map((reply) => (reply.timestamp = __parseTimestamp(reply.timestamp)));
    });

    return { data, count };
  } catch (error) {
    console.error(`[MONGO_DB][COMMENTS][FIND_MANY] Failed to fetch comment data. ERROR --> ${error}`);
    return { error };
  }
};

const insertOne = async (commentsCollection, body) => {
  try {
    const document = {
      articleId: ObjectId(body.articleId),
      author: body.author,
      email: body.email,
      comment: body.comment,
      timestamp: Date.now(),
      imgUrl: body.imgUrl || null,
    };
    body.commentId ? (document['replyId'] = ObjectId(body.commentId)) : (document['commentId'] = ObjectId());

    const result = await commentsCollection.insertOne(document);

    return result;
  } catch (error) {
    console.error(`[MONGO_DB][COMMENTS][INSERT_ONE] Failed to insert comment data. ERROR --> ${error}`);
    return { error };
  }
};

module.exports = {
  findMany,
  insertOne,
};
