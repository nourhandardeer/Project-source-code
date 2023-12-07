const Product = require('../modules/productModule');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const productList = await Product.find();
    if (!productList) {
        res.status(500).json({ message: notFound })
    }
    res.send(productList);

})


router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        reviews: req.body.reviews,
        numReviews: req.body.numReviews,
        price: req.body.price,
        countInStock: req.body.countInStock
    })

    // if(!product) {
    //     res.status(500).json({message: created})
    // }
    //     res.send(product);

    product.save().then((createdProduct => {
        res.status(201).json(createdProduct)
    })).catch((err) => {
        res.status(500).json({
            error: err,
            success: false

        })
    })
})

module.exports = router;