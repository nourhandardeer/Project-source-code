const {Order }= require('../modules/orderModule');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) => {
    try {
        const orderList = await Order.find().populate('user', 'name').sort({ 'dateOrdered': -1 });

        if (!orderList) {
            res.status(500).json({ success: false });
        } else {
            res.send(orderList);
        }
    } catch (error) {
        // Handle the error appropriately, log it, and send an error response
        console.error('Error fetching orders:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});


router.get(`/:id`, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('user', 'name')
            .populate({
                path: 'orderItems',
                populate: {
                    path: 'product',
                    populate: 'category',
                },
            });

        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        res.send(order);
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});


router.post('/', async (req, res) => {
    try {
        const orderItems = req.body.orderItems.map(orderItem => new OrderItem({
            quantity: orderItem.quantity,
            product: orderItem.product,
        }));

        const orderItemsSaved = await OrderItem.insertMany(orderItems);
        const totalPrices = orderItemsSaved.map(orderItem => orderItem.quantity * orderItem.product.price);
        const totalPrice = totalPrices.reduce((acc, curr) => acc + curr, 0);

        const newOrder = new Order({
            orderItem: orderItemsSaved.map(orderItem => orderItem._id),
            shippingAddress: req.body.shippingAddress,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            status: req.body.status || 'Pending',
            totalPrice: totalPrice,
            user: req.body.user, // Assuming you have a valid user ID
        });

        const savedOrder = await newOrder.save();

        res.status(201).json(savedOrder); // 201 Created status for successful creation
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});





router.put('/:id',async (req, res)=> {
    const order = await Order.findByIdAndUpdate(
        req.params.id,
        {
            status: req.body.status
        },
        { new: true}
    )

    if(!order)
    return res.status(400).send('the order cannot be update!')

    res.send(order);
})


router.delete('/:id', (req, res)=>{
    Order.findByIdAndRemove(req.params.id).then(async order =>{
        if(order) {
            await order.orderItems.map(async orderItem => {
                await OrderItem.findByIdAndRemove(orderItem)
            })
            return res.status(200).json({success: true, message: 'the order is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "order not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})

router.get('/get/totalsales', async (req, res)=> {
    const totalSales= await Order.aggregate([
        { $group: { _id: null , totalsales : { $sum : '$totalPrice'}}}
    ])

    if(!totalSales) {
        return res.status(400).send('The order sales cannot be generated')
    }

    res.send({totalsales: totalSales.pop().totalsales})
})

router.get(`/get/count`, async (req, res) =>{
    const orderCount = await Order.countDocuments((count) => count)

    if(!orderCount) {
        res.status(500).json({success: false})
    } 
    res.send({
        orderCount: orderCount
    });
})

router.get(`/get/userorders/:userid`, async (req, res) =>{
    const userOrderList = await Order.find({user: req.params.userid}).populate({ 
        path: 'orderItems', populate: {
            path : 'product', populate: 'category'} 
        }).sort({'dateOrdered': -1});

    if(!userOrderList) {
        res.status(500).json({success: false})
    } 
    res.send(userOrderList);
})



module.exports =router;