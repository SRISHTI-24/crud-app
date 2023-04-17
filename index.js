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

// show all users
app.get("/showuser",(req,res)=>{
    let sql = 'SELECT * FROM `employee`'
    db.query(sql,(err,result)=>{
        if(err) throw err
        else
        res.json(result)
    })
})

//show a particular user
app.get("/showuser/:email",(req,res)=>{
    let sql = `SELECT * FROM employee where emailid = '${req.params.email}'`

    db.query(sql,(err,result)=>{
    if(err) throw err
    else
    res.json(result)
})
})

//delete user

app.delete("/deleteuser/:email",(req,res)=>{
    let eid = req.params.email
    let sql = `DELETE FROM employee where emailid = '${eid}'`
    db.query(sql,(err,result)=>{
        if(err) throw err
        else
        res.json(result)
    })
})

// update user
app.put("/updateuser/:email",(req,res)=>{
    let email = req.params.email
    const name = req.body.names
    const phone = req.body.phone
    const city = req.body.city
    let sql = `UPDATE employee SET names='${name}', phone='${phone}',city='${city}'`
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