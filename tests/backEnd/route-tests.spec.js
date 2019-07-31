// Product Routes
const app = require('../../server/index');
const agent = require('supertest')(app);

// import model reqs
const { db } = require('../../server/db/index');
const { Product, Order, OrderProduct } = require('../../server/db/index');

describe('Product routes', () => {
  let products;
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
    // await db.sync({ force: true });
    const createdProds = await Product.bulkCreate([sampleProd1, sampleProd2]);
    products = createdProds.map(prods => prods.dataValues);
    return products;
  });

  // Route for fetching products
  describe('GET `/api/products', () => {
    it('serves up all products', async () => {
      const responseProd = await agent.get('/api/products').expect(200);
      expect(responseProd.body[0].name).toEqual(products[0].name);
    });
  });

  // Route for fetching single product
  describe('GET `/api/products/:id', () => {
    it('serves up single product', async () => {
      const prodId = products[0].id;
      const responseProd = await agent.get(`/api/products/${prodId}`).expect(200);
      expect(responseProd.body.name).toEqual("Ellie's Brown Ale");
    });
  });
});

// describe('Order routes', () => {
//   let orders;
//   let sampleOrder1 = {
//     orderTotal: 20,
//     status: 'PENDING',
//   };
//   let createdOrdProds;
//   const sampleProd1 = {
//     name: `Ellie's Brown Ale`,
//     description: `This beautiful, deep russet brew has the sweet and somewhat nutty character of Adam Avery's late (1992-2002) Chocolate Lab, for which it is named.`,
//     imageUrl: '/images/avery_ellies.jpg',
//     price: 5.0,
//   };
//   const sampleProd2 = {
//     name: `Naimuns Finest`,
//     description: `This beautiful test wine is delicious for the brave.`,
//     imageUrl: '/images/avery_ellies.jpg',
//     price: 100.0,
//   };
// beforeEach(async () => {
//   // const createdProds = await Product.bulkCreate([sampleProd1, sampleProd2]);
//   orders = await Order.create(sampleOrder1);
//   return orders;
// });
// describe('GET `/api/orders', () => {
//   it('serves up single order', async () => {});
// });
// });
