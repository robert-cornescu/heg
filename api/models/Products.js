/**
 * Products.js
 *
 * @description :: The model for products.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    product_id: {
      type: 'string',
      primaryKey: 'true'
    },
    product_item_type: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    net_price: {
      type: 'number'
    },
    currency: {
      type: 'string'
    }
  }
};

