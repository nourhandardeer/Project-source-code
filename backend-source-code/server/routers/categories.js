const Category = require('../modules/categoryModule');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const categoryList = await Category.find();
    if (!categoryList) {
        res.status(500).json({ message: notFound })
    }
    res.send(categoryList);

})

router.post('/', async (req, res) => {
    const category = new Category({
        name: req.body.name,
        image: req.body.image
    })

    category = await category.save();

    if(!category) 
        return res.status(404).send('the category cannot be created');

        res.send(category);
    
})

module.exports = router;
