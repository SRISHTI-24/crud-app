const express = require('express')

const app = express()
const db = require('./model/connection')

app.use(express.json())
app.get('/test', (req, res) => {
    res.json({ "msg": "hii" })
})

app.post('/adduser',(req,res)=>{
    const user = {
    names:req.body.names,
    emailid:req.body.email,
    phone:req.body.mobile,
    city:req.body.city
    }
    let sql = "INSERT INTO `employee` SET ?"
    db.query(sql,user,(err,result)=>{
    if(err) throw err;
    else
    res.json(result)
    })
})

app.get("/showuser",(req,res)=>{
    let sql = 'SELECT * FROM `employee`'
    db.query(sql,(err,result)=>{
        if(err) throw err
        else
        res.json(result)
    })
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("server is running at ", PORT)
})