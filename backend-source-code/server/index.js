const express = require("express");
const mongoose = require('mongoose');
const productsRouter = require('./routers/products');
const usersRoutes = require('./routers/users');
const ordersRoutes = require('./routers/orders');
const bcrypt = require('bcrypt');
require('dotenv/config');
const app = express();
const api = process.env.API_URL;
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routers
app.use('${api}/products', productsRouter)
<<<<<<< HEAD
app.use('/users', usersRoutes)
=======
app.use('${api}/users', usersRoutes)
app.use('${api}/orders', ordersRoutes)
/* const { notFound, errorHandler } = require("../backend-source-code/Errors");
>>>>>>> a1ebeb8e1fb21f18bb977d996f9eeff618df11bf

mongoose.set("strictQuery", false)
mongoose
    .connect('mongodb://127.0.0.1:27017/projectData')
    .then(() => {
        console.log('connected to MongoDB')
        //listen on specific port 
        app.listen(5000, () => console.log('app started on port 5000'))
    }).catch((error) => {
        console.log('cant connect to mongodb' + error)
    })