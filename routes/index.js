var express = require('express');
var router = express.Router();
const moment = require('moment');

const messages = [
  {
    subject: 'Welcome!',
    text: 'This Mini Message Board was built with NodeJs, Express and PUG.',
    user: 'Keffri Neal',
    added: moment().format('MMMM Do YY'),
  },
];

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Mini Message Board' });
});

router.post('/new', (req, res) => {
  messages.push({
    subject: req.body.subject,
    text: req.body.message,
    user: req.body.user,
    added: moment().format('MMMM Do YY'),
  });
  res.redirect('/');
  console.log(messages);
});

module.exports = router;
