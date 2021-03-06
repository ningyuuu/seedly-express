const express = require('express');
const bodyParser = require('body-parser');

const router = require('./router');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(router);

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

