const express=require("express")
const app=express()
const path=require("path")
const QRCode=require("qrcode")
var port=process.env.PORT||3000
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/code",async(req,res)=>{
    const src=await QRCode.toDataURL(JSON.stringify({name:"yugandhar",lname:"ladhe"}))
    res.render("index")
})

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"view"))
app.listen(port,()=>{
    console.log("app is listening")
})