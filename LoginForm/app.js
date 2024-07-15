
const express= require('express');
const app = express();

const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');
const user = require('./models/user');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/',(req,res) => {
    res.render('index')
})

app.post('/create',  (req,res) => {
    let {username,email,password,age} = req.body;

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async (err,hash)=>{
           let createUser = await userModel.create({
            username,
            email,
            password:hash,
            age
           })
          let token = jwt.sign({email},"uttam");
           res.cookie("token",token);
           res.send(createUser);
        })
    })


})

app.post("/login",(req,res)=>{
    res.render('login');
    
})
app.post('/login',(req,res)=>{
    userModel.findOne({email:req.body.email});
    if(!user) return res.send("something went wrong");

     bcrypt.compare(req.body.password,user.password,(err,result)=>{
        if(result){
            let token = jwt.sign({email},"uttam");
           res.cookie("token",token);
        }
        else res.send("wrong password");
        
     });
})


app.get("/logout",(req,res)=>{
    res.cookie("token","");
    res.redirect("/");
})


app.listen(3000,()=>{
    console.log('listening on port 3000');
})