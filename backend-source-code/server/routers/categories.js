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

router.put('/:id',async (req, res)=> {
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
        },
        //return the new updated data
        { new: true}
    )

    if(!category)
    return res.status(400).send('the category cannot be created!')

    res.send(category);
})

router.delete('/:id', (req, res)=>{
    //then: return a document
    Category.findByIdAndRemove(req.params.id).then(category =>{
        if(category) {
            return res.status(200).json({success: true, message: 'the category is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "category not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})

module.exports = router;
