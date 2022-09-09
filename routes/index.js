var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form');
});

router.post('/new', (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect('/');
  console.log(messages);
});

module.exports = router;
