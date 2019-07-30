const router = require('express').Router();
const { Product, Category, Supplier } = require('../../db/index');

// API/Products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({ include: [{ model: Supplier }, { model: Category }] });
    res.json(products);
  } catch (error) {
    console.error(error);
  }
});

router.post('/users', async (req, res, next) => {
  try {
    const {} = req.body;
    // const order = await Order.create({ user, session, orderTotal });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
