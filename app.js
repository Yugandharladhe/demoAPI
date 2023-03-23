const express=require("express")
const app=express()
const path=require("path")
const QRCode=require("qrcode")
var port=process.env.PORT||3000

app.set("view engine","hbs")
app.set("views",path.join(__dirname,"view"))
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/code",async(req,res)=>{
    const src=await QRCode.toDataURL(JSON.stringify({name:"yugandhar",lname:"ladhe"}))
    res.render("index",{source:src})
})


app.listen(port,()=>{
    console.log("app is listening")
})