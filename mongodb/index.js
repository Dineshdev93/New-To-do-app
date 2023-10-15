const express = require('express')
const app = express();
require('./utility/Config')
const TodoSchema = require('./utility/Schema')
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get("/",async(req,res)=>{
 let result = await TodoSchema.find();
 res.send(result)
})

app.post("/post",async(req,res)=>{
   const User = new TodoSchema(req.body)
   let Create = await User.save()
   res.send(Create)
})

app.delete("/del/:id",async(req,res)=>{
    const result =await TodoSchema.deleteOne({_id : req.params.id})
     res.send(result)
})

app.listen(5000)