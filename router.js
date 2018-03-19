const express = require('express');
const fbgraph = require('./fbgraph');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({hello: 'world!'});
});

router.get('/feed', (req, res) => {
  fbgraph.getFeed()
    .then(response => res.send(response))
    .catch(err => res.send(`Error: ${err}`));
});

module.exports = router;