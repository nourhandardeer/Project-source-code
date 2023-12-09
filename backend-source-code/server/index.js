const express = require("express");
const mongoose = require('mongoose');
 const User = require('./modules/userModule');
const Product = require('./modules/productModule');
const Order = require('./modules/orderModule'); 
const productsRouter = require('./routers/products');
const categoriesRoutes= require('./routers/categories')
const usersRoutes = require('./routers/users');
const ordersRoutes = require('./routers/order');
const cartRoutes = require('./routers/cart');
const multerRoutes = require('./routers/upload');
const bcrypt = require('bcrypt');
const errorHandler = require('./errorHandler/Errors');
const cors = require('cors');
const app = express()
require('dotenv/config');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler);

//routers
//const api = process.env.API_URL;

app.use('/products', productsRouter)
app.use('/users', usersRoutes)
app.use('/orders', ordersRoutes)
app.use('/categories', categoriesRoutes)
app.use('/cart', cartRoutes)
<<<<<<< Updated upstream
app.use('/up', multerRoutes);
=======
app.use('/up', multerRoutes)
// app.use(notFound)
// app.use(errorHandler)
/* const { notFound, errorHandler } = require("../backend-source-code/Errors");
>>>>>>> Stashed changes

mongoose.set("strictQuery", false)
mongoose
    .connect('mongodb://127.0.0.1:27017/projectData')
    .then(() => {
        console.log('connected to MongoDB')
        //listen on specific port 
        app.listen(8000, () => console.log('app started on port 8000'))
    }).catch((error) => {
        console.log('cant connect to mongodb' + error)
    })