const express = require('express')

const app = express()


app.get('/test',(req,res)=>{
    res.json({"msg": "hii"})
})
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log("server is running at ",PORT)
})