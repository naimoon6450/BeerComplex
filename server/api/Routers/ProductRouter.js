const router = require('express').Router();
const { Product, Category, Supplier } = require('../../db/index');

// API/Products
router.get('/', async (req, res, next) => {
    try {
        const products = await Product.findAll({ include: [{ model: Supplier}, { model: Category}] });
        res.json(products);
    }
    catch (error) {
        console.error(error);
    }
});

module.exports = router;
