const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


app.use(cookieParser());

app.get('/',(req,res) => {
     let token=  jwt.sign({email: 'test@example.com'},"secret")
     res.cookie("token",token)
     console.log(token);
    })

app.get('/read',(req,res) => {
    //console.log(req.cookies.token);
   let data =  jwt.verify(req.cookies.token,"secret");
    console.log(data);
})

app.listen(8080,()=>{
    console.log('listening on 4500');
})