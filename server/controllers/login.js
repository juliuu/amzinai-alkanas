const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const MongoDbService = require('../mongodb');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) return res.status(400).send('All inputs are required');

    const user = await MongoDbService.users.findOne(username);

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ username }, process.env.TOKEN_KEY, {
        expiresIn: '8h',
      });

      return res.status(200).json({ token });
    }

    return res.status(401).send('Invalid Credentials');
  } catch (error) {
    console.log('[LOGIN] Failed to login. Error --> ', { error });
    res.status(500).send('Internal server failure');
  }
};

module.exports = login;
