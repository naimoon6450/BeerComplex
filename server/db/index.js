const db = require('./connection');
const Product = require('../db/models/Product');
const Supplier = require('../db/models/Supplier');
const Category = require('../db/models/Category');
const Order = require('../db/models/Order');

// Associations Here
Product.belongsTo(Supplier);
Product.belongsTo(Category);
Supplier.hasMany(Product);
Category.hasMany(Product);

module.exports = {
  db,
  Product,
};
