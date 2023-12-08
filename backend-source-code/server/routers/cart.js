const Cart = require('../modules/cartModule');
const User = require('../modules/userModule');
const Product = require('../modules/productModule');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    const cart = await Cart.findById(req.params.id).populate('products');
    const cartList = await Cart.find();
    if (!cartList)
        res.status(500).send("Your cart is empty")

    res.send(cartList);
});

// router.get('/get/:userId/total-quantity', async (req, res) => { 
//     try {
//         const userId = req.params.userId;
//         // Find the user's cart
//         const userCart = await Cart.findOne({ userId });

//         if (!userCart) {
//             return res.status(404).json({ message: 'Cart not found for this user' });
//           }
//           const totalQuantity = userCart.products.reduce((total, product) => total + product.quantity, 0);

//           // Return the total quantity
//           res.status(200).json({ totalQuantity });
//         } 
//      catch (err) {
//     console.error(err)
//     res.status(500).json({ error: 'Internal Server Error' });
//  } 


// })
router.post('/', async (req, res) => {
    const userId = await User.findById(req.body.userId)
    if (!userId)
        return res.status(400).send('Invalid userId')

    const productId = await Product.findById(req.body.productId)
    if (!productId)
        return res.status(400).send('Invalid productId')

    let cart = new Cart({
        userId: req.body.userId,
        productId: req.body.productId,
        quantity: req.body.quantity

    })
    cart = await cart.save();

    if (!cart) {
        res.status(500).send('The cart cannot be created')
    }
    res.send(cart);

});

router.put('/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid Product Id')
    }

    const userId = await User.findById(req.body.userId)
    if (!userId)
        return res.status(400).send('Invalid userId')

    const productId = await Product.findById(req.body.productId)
    if (!productId)
        return res.status(400).send('Invalid productId')

    const cart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
            userId: req.body.userId,
            productId: req.body.productId,
            quantity: req.body.quantity
        },
        { new: true }
    )
    if (!cart)
        return res.status(500).send('the cart cannot be updated!')

    res.send(cart);
});


module.exports = router;