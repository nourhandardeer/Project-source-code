const mongoose = require('mongoose');
const { Order}= require('../modules/orderModule');
const { OrderItem } =  require('../modules/orderModule');
const User = require('../modules/userModule');
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


router.get('/:id', async (req, res) => {
    try {
      const orderId = req.params.id;
  
      // Find the order by ID
      const foundOrder = await Order.findById(orderId);
  
      // If the order doesn't exist, return a 404 status
      if (!foundOrder) {
        return res.status(404).json({ success: false, error: 'Order not found' });
      }
  
      // Return the found order as JSON
      res.json(foundOrder);
    } catch (error) {
      console.error('Error fetching order by ID:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });
  

router.post('/', async (req, res) => {
    try {
      // Extract order details from the request body
      const {
        orderItem,
        shippingAddress,
        city,
        zip,
        country,
        phone,
        status = 'Pending',
        totalPrice,
        user,
      } = req.body;
  
      // Create a new Order instance
      const newOrder = new Order({
        orderItem,
        shippingAddress,
        city,
        zip,
        country,
        phone,
        status,
        totalPrice,
        user,
      });
  
      // Save the order to the database
      const savedOrder = await newOrder.save();
  
      // Return the saved order as JSON
      res.status(201).json(savedOrder);
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });


  router.put('/:id', async (req, res) => {
    try {
      const orderId = req.params.id;
      const { shippingAddress, city, zip, country, phone, status, totalPrice, user, orderItem } = req.body;
  
      // Update the order by ID
      const updatedOrder = await Order.findByIdAndUpdate(
        orderId,
        { shippingAddress, city, zip, country, phone, status, totalPrice, user, orderItem },
        { new: true }
      );
  
      // If the order doesn't exist, return a 404 status
      if (!updatedOrder) {
        return res.status(404).json({ success: false, error: 'Order not found' });
      }
  
      // Update order items if orderItem is defined and is an array
      let updatedOrderItems = [];
      if (Array.isArray(orderItem)) {
        updatedOrderItems = await Promise.all(
          orderItem.map(async (item) => {
            const { itemId, quantity, product } = item;
  
            // Update each order item by ID
            const updatedItem = await OrderItem.findByIdAndUpdate(
              itemId,
              { quantity, product },
              { new: true }
            );
  
            return updatedItem;
          })
        );
      }
  
      // Return the updated order and order items as JSON
      res.json({ success: true, order: updatedOrder, orderItems: updatedOrderItems });
    } catch (error) {
      console.error('Error updating order and order items by ID:', error);
      res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
    }
  });
  

  router.delete('/:id', async (req, res) => {
    try {
      const orderId = req.params.id;
  
      // Check if the order exists
      const order = await Order.findById(orderId);
      if (!order) {
        return res.status(404).json({ success: false, error: 'Order not found' });
      }
  
      // Delete all associated order items
      await OrderItem.deleteMany({ _id: { $in: order.orderItem } });
  
      // Delete the order
      await Order.findByIdAndDelete(orderId);
  
      res.status(200).json({ success: true, message: 'Order deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
    }
  });
   

  router.get('/userorders/:userid', async (req, res) => {
    try {
        const userId = req.params.userid;

        // Ensure the user ID is valid (you may want to add more validation)
        if (!userId) {
            return res.status(400).json({ success: false, error: 'Invalid user ID' });
        }

        // Find orders for the specified user ID
        const userOrders = await Order.find({ user: userId }).populate('user', 'name').sort({ dateOrdered: -1 });

        if (!userOrders) {
            return res.status(404).json({ success: false, error: 'User orders not found' });
        }

        res.status(200).json({ success: true, data: userOrders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});



module.exports =router;