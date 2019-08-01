// Product Routes
const app = require('../../../server/index');
const agent = require('supertest')(app);

// import model reqs
const sequelize = require('sequelize');
const { db } = require('../../../server/db/index');
const { Product } = require('../../../server/db/index');

describe('Product routes', () => {
  let product;

  const sampleProd = {
    name: `Ellie's Brown Ale`,
    description: `This beautiful, deep russet brew has the sweet and somewhat nutty character of Adam Avery's late (1992-2002) Chocolate Lab, for which it is named.`,
    imageUrl: '/images/avery_ellies.jpg',
    price: 5.0,
  };

  // Route for fetching all campuses
  describe('test', () => {
    it('serves up all Campuses', async () => {
      const createdProd = Product.build(sampleProd);
    });
  });
});

describe('Order routes', () => {});
