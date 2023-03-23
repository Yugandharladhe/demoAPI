const express=require("express")
const app=express()
const path=require("path")
const QRCode=require("qrcode")
var port=process.env.PORT||3000
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/code",async(req,res)=>{
    const obj=[{
        menuItem:"xyz",
        quantity:3,
        instruction:"less"
    },
    {
        menuItem:"pqr",
        quantity:1,
        instruction:"more"
    },
    {
        menuItem:"pqr",
        quantity:2,
        instruction:"normal"
    },
    {
        menuItem:"yzt",
        quantity:3,
        instruction:"extreme"
    }];
    const src=await QRCode.toDataURL(obj)
    res.render("index",{src:src,stmt:"Scan this QR Code"})
})

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"view"))
app.listen(port,()=>{
    console.log("app is listening")
})