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
<<<<<<< HEAD
const authJwt=require('./helpers/jwt');
=======
const errorHandler = require('./errorHandler/Errors');
//const index = express();
const app = express()
//const { notFound, errorHandler } = require("../Errors");
>>>>>>> 850ec831dc76acc6ec6cc88ba96a797eddfcc0df
require('dotenv/config');


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler);

//routers
const api = process.env.API_URL;

app.use('/products', productsRouter)
app.use('/users', usersRoutes)
<<<<<<< HEAD
app.use(authJwt);
=======
app.use('/orders', ordersRoutes)
app.use('/categories', categoriesRoutes)
// app.use(notFound)
// app.use(errorHandler)
/* const { notFound, errorHandler } = require("../backend-source-code/Errors");


const index = express();
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))



index.use(notFound);
index.use(errorHandler);

/* app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}); */
>>>>>>> 850ec831dc76acc6ec6cc88ba96a797eddfcc0df
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