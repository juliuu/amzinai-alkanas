const path = require('path');
const express = require('express');
const helmet = require('helmet');

// const auth = require('./server/middleware/auth');
const { login } = require('./server/controllers');
const router = require('./server/routes');
const MongoDbService = require('./server/mongodb');

(async () => {
  // Initialize services
  await MongoDbService.init();

  const app = express();

  app.use(express.json());
  app.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          frameSrc: ['https://www.youtube.com/'],
          imgSrc: ['https: data'],
        },
      },
      referrerPolicy: {
        policy: 'origin',
      },
    })
  );
  app.use(express.static(path.resolve(__dirname, './client/build')));

  app.post('/login', login);
  // app.use('/admin', auth, admin) // TODO: protect this with auth middleware;
  app.use('/api', router);

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });

  app.listen(process.env.PORT || 3001, () => {
    console.log('Server running!');
  });
})();
