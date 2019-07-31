const router = require('express').Router();
const { User } = require('../../db/index');

router.post('/login', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.session.userId = user.id;
      res.json(user);
    })
    .catch(next);
});
