const router = require('express').Router();

router.use((req, res, next) => {
  console.log('In Router Index');
  next();
});
router.use('/auth', require('./router/auth'));
router.use('/products', require('./router/ProductRouter'));
router.use('/orders', require('./router/OrderRouter'));
router.use('/users', require('./router/UserRouter'));

module.exports = router;
