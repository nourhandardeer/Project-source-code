const {Product} = require('../modules/productModule');
const { Category } = require('../modules/categoryModule');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const productList = await Product.find();
    if (!productList) {
        res.status(500).json({ message: notFound })
    }
    res.send(productList);

})

router.get(`/:id`, async (req, res) =>{
    //populate: display the category details
    const product = await Product.findById(req.params.id).populate('category');

    if(!product) {
        res.status(500).json({success: false})
    } 
    res.send(product);
})

router.post('/', async (req, res) => {
 const category = await Category.findById(req.body.category)
 if(!category) {
    return res.status(400).send('Invalid category')
 }

    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        rating: req.body.reviews,
        numReviews: req.body.numReviews,
        rating: req.body.rating,
        category: req.body.category,
        comment: req.body.comment,
        isFeatured: req.body.isFeatured,
        price: req.body.price,
        countInStock: req.body.countInStock
    })

product = await product.save();
    if(!product) {
        res.status(500).send('The category cannot be created')
    }
        res.send(product);
})
   

module.exports = router;