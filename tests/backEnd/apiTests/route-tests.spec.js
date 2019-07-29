// Product Routes
const app = require('../../../server/index');
const agent = require('supertest')(app);

// import model reqs
const sequelize = require('sequelize');
const { db } = require('../../../server/db/index');
const { Product } = require('../../../server/db/index');

describe('Product routes', () => {
  let product;

  const sampleProd1 = {
    name: `Ellie's Brown Ale`,
    description: `This beautiful, deep russet brew has the sweet and somewhat nutty character of Adam Avery's late (1992-2002) Chocolate Lab, for which it is named.`,
    imageUrl: '/images/avery_ellies.jpg',
    price: 5.0,
  };

  const sampleProd2 = {
    name: `Naimuns Finest`,
    description: `This beautiful test wine is delicious for the brave.`,
    imageUrl: '/images/avery_ellies.jpg',
    price: 100.0,
  };

  beforeEach(async () => {
    await Product.bulkCreate([sampleProd1, sampleProd2]);
  });

  // Route for fetching products
  describe('GET `/api/products', () => {
    it('serves up all products', async () => {
      const createdProd = await Product.findAll();
    });
  });
});
