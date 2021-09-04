const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('/api', (req, res) => {
  res.json({ message: 'API resposne' });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server running!');
});
