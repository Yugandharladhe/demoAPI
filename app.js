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

app.post("/contact",async(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const subject=req.body.subject;
    const message=req.body.message;
    console.log(name)
    res.send("Your message has been sent. Thank you!")
})









app.listen(port,async()=>{
    console.log("app is listening")
})