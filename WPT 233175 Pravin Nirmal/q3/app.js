const express=require("express")
const app=express()
const bodyparser=require("body-parser")
const router=require("./router/router")

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use("/",router)

app.listen(3002,function(){
    console.log("server running at port 3002")
})
module.exports=app