const express=require("express")
const app=express()
var port=process.env.PORT||3000
app.get("/",(req,res)=>{
    res.send("<h1>hello my application has been deployed</h1>");
})

app.listen(port,()=>{
    console.log("app is listening")
})