const router = require('express').Router();
const { Order, User } = require('../../db/models/');

// Routes:
// /api/orders (all orders)
router.get('/orders', async (req, res) => {
  const orders = await Order.findAll();
  res.send(orders);
});

// /api/orders/:id (specific order, which includes products)
router.get('/orders/:id', async (req, res) => {
  const order = await Order.findOne({ where: { id: req.params.id } });
  res.send(order);
});

// /api/users/:id/orders (all orders of a user)
router.get('/users/:id/orders', async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  const orders = await user.getOrders();
  res.send(orders);
});

// /api/users/:id/orders/:id (specific order of a user, which includes products)
router.get('/users/:id/orders/:orderId', async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  const orders = await user.getOrders();
  const order = orders.filter(order =>
    order.id === req.params.orderId ? true : false
  )[0];
  res.send(order);
});

module.exports = router;
