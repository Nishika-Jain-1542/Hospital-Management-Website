const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const doctors = [

{email:"aarya@sanjeevnihospital.com",password:"doctor123"},
{email:"aastha@sanjeevnihospital.com",password:"doctor123"},
{email:"saloni@sanjeevnihospital.com",password:"doctor123"},
{email:"sanchita@sanjeevnihospital.com",password:"doctor123"},
{email:"aashi@sanjeevnihospital.com",password:"doctor123"},
{email:"ronak@sanjeevnihospital.com",password:"doctor123"},
{email:"soumya@sanjeevnihospital.com",password:"doctor123"},
{email:"salini@sanjeevnihospital.com",password:"doctor123"}

]

app.post("/api/doctor/login",(req,res)=>{

const {email,password}=req.body

const doctor=doctors.find(
d=>d.email===email && d.password===password
)

if(doctor){

res.json({success:true})

}
else{

res.json({success:false})

}

})

app.listen(5000,()=>{

console.log("Server running on port 5000")

})