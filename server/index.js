const express = require("express");
const mongoose = require('mongoose')
const User = require('./modules/userModule')
const Product = require('./modules/productModule')
const Order = require('./modules/orderModule')
const bcrypt = require('bcrypt');
const { notFound, errorHandler } = require("../backend-source-code/Errors");


const index = express();



index.use(notFound);
index.use(errorHandler);

index.get("/",(req,res) =>{
res.send("API RUNNING")
});
index.listen(5000,console.log("server running"));