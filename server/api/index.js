const router = require('express').Router();

router.use('/products', require('./routers/ProductRouter'));
router.use('/orders', require('./routers/OrderRouter'));
router.use('/users', require('./routers/UserRouter'));

router.use((req, res, next) => {
  res.status(404).send('Not found');
});

module.exports = router;
