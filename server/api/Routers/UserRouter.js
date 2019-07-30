const router = require('express').Router();
const { User } = require('../../db/index');

// api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
