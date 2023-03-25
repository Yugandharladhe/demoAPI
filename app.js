const express=require("express")
const app=express()
const path=require("path")
const mongoose=require("mongoose")
const QRCode=require("qrcode")
var port=process.env.PORT||3000
const bodyParser=require("body-parser");
const { application } = require("express")

app.set("view engine","hbs")
app.set("views",path.join(__dirname,"view"))

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,"public")))
app.get("/",(req,res)=>{
    res.render("index")
})











app.listen(port,async()=>{
    console.log("app is listening")
})