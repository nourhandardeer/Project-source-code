const express = require("express");
const { notFound, errorHandler } = require("../backend-source-code/Errors");
const app = express();


app.use(notFound);
app.use(errorHandler);

app.get("/",(req,res) =>{
res.send("API RUNNING")
});
app.listen(5000,console.log("server running"));