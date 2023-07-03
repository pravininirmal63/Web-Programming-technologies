const express=require("express")
const router=express.Router()
const connection=require("../dbConn/dconnection")


router.get("/bd/patient",(req,resp)=>{
    connection.query("select * from Donors",(err,data)=>{
        if(err){
            resp.status(500).send("errror occured"+ JSON.stringify(err))
        }
        else{
            resp.send(data)
        }
    })
})

router.post("/bd/patient/:pid",(req,resp)=>{
    let name=req.body.Dname;
    let address=req.body.Adress;
    let bblood=req.body.Blood;
    let mobile=req.body.Mobile;
    let gender=req.body.Gender;
    connection.query("insert into Donors values(?,?,?,?,?)",[name,address,bblood,mobile,gender],(err,data)=>{
        if(err){
            resp.status(500).send("errror occured"+ JSON.stringify(err))
        }
        else{
            resp.send("data inseted succesfully")
        }
    })

})

module.exports=router;
