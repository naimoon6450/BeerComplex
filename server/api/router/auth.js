const router = require('express').Router();
const { User } = require('../../db/index');

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ where: { email: email, password: password } })
    .then(user => {
      if (user) {
        req.session.userId = user.id;
        console.log(req.session);
        return res.json(user);
      } else {
        const error = new Error('Wrong password or email!');
        error.status = 401;
        return res.send(error);
      }
    })
    .catch(next);
});

module.exports = router;
