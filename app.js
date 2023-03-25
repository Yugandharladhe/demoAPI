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

app.use(bodyParser.json(
    {type:'application/json'}
))
app.use(express.static(path.join(__dirname,"public")))
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/code",async(req,res)=>{
    const src=await QRCode.toDataURL(JSON.stringify({name:"yugandhar",lname:"ladhe"}))
    res.render("index",{source:src})
})

app.get("/form",async(req,res)=>{
    res.render("form")
})

app.post("/submit",async(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const comment=req.body.message;
    console.log(name)
    res.send("form submitted")
})





app.listen(port,async()=>{
    console.log("app is listening")
})