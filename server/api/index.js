const router = require('express').Router();
const { User } = require('../db/index');

router.use('/products', require('./routers/ProductRouter'));
router.use('/orders', require('./routers/OrderRouter'));
router.use('/users', require('./routers/UserRouter'));

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  console.log('hi');
  if (req.body.email && req.body.password) {
    try {
      const user = await User.findAll({ where: { email: email, password: password } });
      if (user[0]) {
        const userId = user[0].dataValues.id;
        req.session.userId = userId; // won't persist yet
        console.log('within async call', req.session);
        next();
      }
    } catch (e) {
      console.error(e);
      res.redirect('/');
    }
  }
  res.redirect('/login');
});

router.use((req, res, next) => {
  console.log('this is req.session after next, req.session');
  res.send(req.session);
});

router.use((req, res, next) => {
  res.status(404).send('Not found');
});

module.exports = router;
