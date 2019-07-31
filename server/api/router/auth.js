const router = require('express').Router();
const { User } = require('../../db/index');

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  User.findAll({ where: { email: email, password: password } })
    .then(user => {
      if (user) {
        req.session.userId = user.id;
        res.json(user);
      } else {
        const error = new Error('Wrong password or email!');
        error.status = 401;
        next(err);
      }
    })
    .catch(next);
});

module.exports = router;
