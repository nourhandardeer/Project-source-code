const express = require("express");
const mongoose = require('mongoose')
const User = require('../backend-source-code/modules/modules/modules/userModule')

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World, from cs309');
});
app.post('/adduser',  async (req, res) => {

    try{
        //get user object from body 
        let userParam = req.body;
        // validate
        if (await User.findOne({ email: userParam.email })) {
            res.send( 'email "' + userParam.email + '" is already exist');
        }
        //Assignment=> hash password before saving user to database ??????????
        const hash = await bcrypt.hash(userParam.password,13)
        userParam.password=hash;
        const user = new User(userParam);
        
        
        // save user
         await user.save();
         res.send("user added successfully ")

    }catch(err)
    {
        res.status(500).send('server error: '+ err);
    }
    
});
mongoose.set("strictQuery", false)
mongoose
.connect('mongodb://127.0.0.1:27017/projectData')
.then(() => {
    console.log('connected to MongoDB')
    //listen on specific port 
    app.listen(5000, () => console.log('app started on port 5000'))
}).catch((error) => {
    console.log('cant connect to mongodb'+error)
})