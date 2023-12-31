const mongoose = require('mongoose');

const orderItemSchema = mongoose.Schema({

    
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }
})

const orderSchema = mongoose.Schema({
    orderItem: {
        type: [orderItemSchema], // If each order can have multiple items
        required: true,
    },
    
    shippingAddress: {
        type: String,
        required: true,
    },
    
    city: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
    },
    totalPrice: {
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    dateOrdered: {
        type: Date,
        default: Date.now,
    },
})

orderSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

orderSchema.set('toJSON', {
    virtuals: true,
});

exports.Order = mongoose.model('Order', orderSchema);
exports.OrderItem = mongoose.model('OrderItem', orderItemSchema);  

