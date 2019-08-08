const Sequelize = require('sequelize');
const db = require('../connection');
const { Product, OrderProduct } = require('../index');

const PENDING = 'PENDING';
const COMPLETE = 'COMPLETE';
const Order = db.define('order', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  orderTotal: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      isInt: true,
    },
  },
  status: {
    type: Sequelize.ENUM(PENDING, COMPLETE),
    defaultValue: PENDING,
  },
});

Order.addUpdateCart = async function (orderProducts, userId) {
  const [order, wasCreated] = await Order.findOrCreate({where: {userId, status: PENDING} });

    let tempOrderTotal = order.orderTotal;

    orderProducts.products.forEach(async (productObj) => {
      const { product, quantity } = productObj;

      // get price from db instead of trusting the price contained in client request
      tempOrderTotal += Product.findByPk(product.id).get('price');

      // if order existed, check if product already exists in cart
      if (!wasCreated) {
        const orderHasProduct = order.hasProduct(product);

        // if it already has the product, update the quantity
        if (orderHasProduct) {
          const joinRow = await OrderProduct.findOne({
            where: {
              orderId: order.id,
              productId: product.id,
            }
          });
          await joinRow.update({
            productQuantity: joinRow.productQuantity + quantity,
          });
        }
      } else { // else add the product to the order
        await order.addProduct(product, { productQuantity: quantity });
      }
    })

    // in either case, update the order total
    const updatedOrder = await order.update({ orderTotal: tempOrderTotal });

    return updatedOrder;
}

module.exports = Order;
