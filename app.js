const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine","ejs");


app.get("/",function(req, res){
    res.send("yo this works!")
});

app.listen(process.env.PORT||3000, function(){
    console.log("Server is listening on port 3000....");
})