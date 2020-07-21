const express = require ('express')
require ('./db/mongoose')
const User = require ('./model/User.js')

const app = express()
const port = process.env.PORT || 2020

app.use(express.json())

app.post('/users', (req, res)=>{

    console.log(req.body)
    const user = new User(req.body)

    user.save().then(()=>{
        res.send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

app.get('/users', (req, res)=>{

    User.find({}).then(()=>{
        res.send(users)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})

app.listen(port, ()=>{
    console.log('Sever is up and running ' + port)
})