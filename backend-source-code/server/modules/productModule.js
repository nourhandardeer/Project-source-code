const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema= mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    
    rating: {
        type: Number,
        required: false,
        default: 0
    },
    numReviews: {
        type: Number,
        required: false,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required:true
     },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }
},
{
    timestamps: true
}
)
productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product; 
