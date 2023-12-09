const express = require("express");
const mongoose = require('mongoose'); 
const productsRouter = require('./routers/products');
const categoriesRoutes= require('./routers/categories')
const usersRoutes = require('./routers/users');
const ordersRoutes = require('./routers/order');
const cartRoutes = require('./routers/cart');
const multerRoutes = require('./routers/upload');
const bcrypt = require('bcrypt');
const authJwt=require('./helpers/jwt')
const errorHandler = require('./errorHandler/Errors');
const cors = require('cors');

const app = express()
require('dotenv/config');

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler);
/* app.use(authJwt); */
//routers
//const api = process.env.API_URL;

app.use('/products', productsRouter)
app.use('/users', usersRoutes)
app.use('/orders', ordersRoutes)

app.use('/categories', categoriesRoutes)
app.use('/cart', cartRoutes)


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