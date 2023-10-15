const express = require('express')
const app = express();

app.get("/",async(req,res)=>{
    console.log(res.send("working. . ."));
})

app.listen(5000)