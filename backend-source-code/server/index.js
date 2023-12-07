const express = require("express");
const mongoose = require('mongoose');
const productsRouter = require('./routers/products');
const usersRoutes = require('./routers/users');
const bcrypt = require('bcrypt');
require('dotenv/config');
const app = express();
const api = process.env.API_URL;
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routers
app.use('${api}/products', productsRouter)
app.use('/users', usersRoutes)

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