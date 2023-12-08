const express = require("express");
const mongoose = require('mongoose');
 const User = require('./modules/userModule');
const Product = require('./modules/productModule');
const Order = require('./modules/orderModule'); 
const productsRouter = require('./routers/products');
const usersRoutes = require('./routers/users');
const ordersRoutes = require('./routers/order');
const categoriesRoutes = require('./routers/categories');
const bcrypt = require('bcrypt');

const authJwt=require('./helpers/jwt');

const errorHandler = require('./errorHandler/Errors');
//const index = express();
const app = express()
//const { notFound, errorHandler } = require("../Errors");

require('dotenv/config');
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler);

//routers
const api = process.env.API_URL;

app.use('/products', productsRouter)
app.use('/users', usersRoutes)
app.use(authJwt);

app.use('/orders', ordersRoutes)
app.use('/categories', categoriesRoutes)


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