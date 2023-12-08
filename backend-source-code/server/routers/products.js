const Product = require('../modules/productModule');
const Category = require('../modules/categoryModule');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


router.get(`/`, async (req, res) => {
    //list products by category
    let filter = {};
    // /products?categories=2635,2737
    if (req.query.categories) {
        filter = { category: req.query.categories.split(',') }
    }
    //else if the filter is empty, it will list all products
    const productList = await Product.find(filter).populate('category');

    if (!productList) {
        res.status(500).json({ success: false })
    }
    res.send(productList);
})

router.get(`/:id`, async (req, res) => {
    //populate: display the category details
    const product = await Product.findById(req.params.id).populate('category');

    if (!product) {
        res.status(500).json({ success: false })
    }
    //return object
    res.send(product);
})

router.get(`/get/count`, async (req, res) => {
    //countDoc: get the number of products and return it
    const productCount = await Product.countDocuments((count) => count)

    if (!productCount) {
        res.status(500).json({ success: false })
    }
    //return json
    res.send({
        productCount: productCount
    });
})

router.get(`/get/featured`, async (req, res) => {

    const products = await Product.find({ isFeatured: true });

    if (!products) {
        res.status(500).json({ success: false })
    }
    res.send(products);
})


router.post('/', async (req, res) => {
    const category = await Category.findById(req.body.category)
    if (!category) 
        return res.status(400).send('Invalid category')
    

    let product = new Product({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        numReviews: req.body.numReviews,
        rating: req.body.rating,
        category: req.body.category,
        isFeatured: req.body.isFeatured,
        price: req.body.price,
        countInStock: req.body.countInStock
    })

    product = await product.save();
    if (!product) {
        res.status(500).send('The product cannot be created')
    }
    res.send(product);
})

router.put('/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid Product Id')
    }
    const category = await Category.findById(req.body.category);
    if (!category) return res.status(400).send('Invalid Category')

    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            numReviews: req.body.numReviews,
            rating: req.body.rating,
            category: req.body.category,
            isFeatured: req.body.isFeatured,
            price: req.body.price,
            countInStock: req.body.countInStock
        },
        { new: true }
    )

    if (!product)
        return res.status(500).send('the product cannot be updated!')

    res.send(product);
})

router.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id).then(product => {
        if (product) {
            return res.status(200).json({ success: true, message: 'the product is deleted!' })
        } else {
            return res.status(404).json({ success: false, message: "product not found!" })
        }
    }).catch(err => {
        return res.status(500).json({ success: false, error: err })
    })
})


module.exports = router;