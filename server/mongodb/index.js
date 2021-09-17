const { MongoClient } = require('mongodb');

const reviews = require('./reviews');
const recipes = require('./recipes');
const comments = require('./comments');
const auth = require('./auth');

class MongoDb {
  static mongoClient = undefined;
  static reviewsCollection = undefined;
  static recipesCollection = undefined;
  static commentsCollection = undefined;

  async init() {
    const uri = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@amzinai-alkanas.blanc.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

    try {
      const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };

      const client = new MongoClient(uri, options);
      this.mongoClient = await client.connect();
      await this.mongoClient.db('admin').command({ ping: 1 });

      this.reviewsCollection = this.mongoClient.db(process.env.MONGO_DB_NAME).collection('reviews');
      this.recipesCollection = this.mongoClient.db(process.env.MONGO_DB_NAME).collection('recipes');
      this.commentsCollection = this.mongoClient.db(process.env.MONGO_DB_NAME).collection('comments');
      this.authCollection = this.mongoClient.db(process.env.MONGO_DB_NAME).collection('auth');

      console.log('MONGO_DB initialized.');
    } catch (error) {
      this.mongoClient.close();
      console.log('MONGO_DB failed to initialize --> ', { error });
    }
  }

  // TODO: possibly not needed
  getClient() {
    if (!this.mongoClient) console.log('MONGO_DB not initialized.');
    return this.mongoClient;
  }

  async close() {
    if (this.mongoClient) return this.mongoClient.close();
    return;
  }

  get reviews() {
    return {
      findMany: async (params) => {
        return reviews.findMany(this.reviewsCollection, params);
      },
      findTotal: async (params) => {
        return reviews.findTotal(this.reviewsCollection, params);
      },
      findTop: async (params) => {
        return reviews.findTop(this.reviewsCollection, params);
      },
      findOne: async (params) => {
        return reviews.findOne(this.reviewsCollection, params);
      },
    };
  }

  get recipes() {
    return {
      findMany: async (params) => {
        return recipes.findMany(this.recipesCollection, params);
      },
      findTotal: async (params) => {
        return recipes.findTotal(this.recipesCollection, params);
      },
      findOne: async (params) => {
        return recipes.findOne(this.recipesCollection, params);
      },
    };
  }

  get comments() {
    return {
      findMany: async (params) => {
        return comments.findMany(this.commentsCollection, params);
      },
      insertOne: async (body) => {
        return comments.insertOne(this.commentsCollection, body);
      },
    };
  }

  get users() {
    return {
      findOne: async (username) => {
        return auth.findOne(this.authCollection, username);
      },
    };
  }
}

const MongoDbService = new MongoDb();

module.exports = MongoDbService;
