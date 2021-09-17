const findOne = async (authCollection, username) => {
  try {
    const result = await authCollection.findOne({ username }, { projection: { _id: 0 } });

    return result;
  } catch (error) {
    console.error(`[MONGO_DB][AUTH][FIND_ONE] Failed to fetch data. ERROR --> ${error}`);
  }
};

module.exports = { findOne };
