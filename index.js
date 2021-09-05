const path = require('path');
const express = require('express');
const helmet = require('helmet');

const router = require('./server/routes');
const MongoDbService = require('./server/mongodb');

(async () => {
  // Initialize services
  await MongoDbService.init();

  const app = express();

  app.use(helmet());
  app.use(express.static(path.resolve(__dirname, './client/build')));

  app.use('/api', router);

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });

  app.listen(process.env.PORT || 3001, () => {
    console.log('Server running!');
  });
})();
