const express = require('express');
const winston = require('winston');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
 
  res.send('hello world gays');
});

app.listen(port, () => {
  logger.info(`App listening on port ${port}`);
});
