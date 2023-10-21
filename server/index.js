const express=require('express')
const mongoose=require('mongoose')
const cors =require('cors')

const EmployeeModel=require('./models/Enployee')
const app=express()


app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())
app.use(cors())





app.post('/login',(res,req)=>{
  
    const { email,password} = req.body;
   EmployeeModel.findOne({ email: email})
   
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json('Success')
            }else{
                res.json('the password incorrect')
            }
        }else{
            res.json('no reccord existed')
        }
    })

})




app.post('/register',(req,res)=>
{

try {
    const amine =  EmployeeModel.create(req.body)
    res.status(200).json(amine);
    
} catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
}
})

mongoose.connect("mongodb+srv://amineromdhane77:aminossamaros@samarinos.8irscoh.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('mongo db is ranning')
    
})
.catch(()=>{
    console.log('err')
})
app.listen(3001,()=>{
    console.log("server is ranning")
})
