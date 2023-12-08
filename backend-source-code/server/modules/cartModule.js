const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product', // Reference to the Product model for associating products with the cart
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                default: 0,
              },
        },
      ]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;