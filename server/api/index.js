const router = require('express').Router();

router.use('/auth', require('./router/auth'));
router.use('/products', require('./router/ProductRouter'));
router.use('/orders', require('./router/OrderRouter'));
router.use('/users', require('./router/UserRouter'));

router.use((req, res, next) => {
  res.status(404).send('Not found');
});

module.exports = router;
