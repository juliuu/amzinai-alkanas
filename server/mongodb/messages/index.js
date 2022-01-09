const insertOne = async (messagesCollection, body) => {
  try {
    const document = {
      theme: body.theme,
      message: body.message,
      timestamp: Date.now(),
      read: false,
    };
    const result = await messagesCollection.insertOne(document);

    return result;
  } catch (error) {
    console.error(`[MONGO_DB][MESSAGES][INSERT_ONE] Failed to insert message data. ERROR --> ${error}`);
    return { error };
  }
};

module.exports = {
  insertOne,
};
