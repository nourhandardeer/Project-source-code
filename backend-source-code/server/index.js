const express = require("express");
const mongoose = require('mongoose');
<<<<<<< HEAD
 /*const User = require('./modules/userModule');
const Product = require('./modules/productModule');
const Order = require('./modules/orderModule'); */
=======
>>>>>>> 73729d889c452ec3dbd403ea18c1dab4d2bc436f
const productsRouter = require('./routers/products');
const usersRoutes = require('./routers/users');
const bcrypt = require('bcrypt');
<<<<<<< HEAD
//const index = express();
const app = express()
require('dotenv/config');


=======
require('dotenv/config');
const app = express();
const api = process.env.API_URL;
>>>>>>> 73729d889c452ec3dbd403ea18c1dab4d2bc436f
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routers
<<<<<<< HEAD
const api = process.env.API_URL;

app.use('${api}/products', productsRouter)
app.use('${api}/users', usersRoutes)
app.use('${api}/orders', ordersRoutes)
/* const { notFound, errorHandler } = require("../backend-source-code/Errors");
=======
app.use('/products', productsRouter)
app.use('/users', usersRoutes)
>>>>>>> 73729d889c452ec3dbd403ea18c1dab4d2bc436f

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