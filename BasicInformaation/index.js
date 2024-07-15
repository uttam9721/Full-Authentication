const express = require('express');
const app = express();
const path = require('path');

// this middleware used to fetch data from the front-end which is json form
app.use(express.json())

//this middleware is use to fetch data from the front-end 
app.use(express.urlencoded({extended:true}));


//this middleware is use to fetch data from the public folder 
// public folder created by the use handle front-end static data 
app.use(express.static(path.join(__dirname, 'public')))

// this line is use to render ejs file from the front-end  
app.set('view engine','ejs');

app.get('/',(req, res)=>{
    res.render('index');
});
//:after colon value work as a variable which is work as a dynamic value
app.get("/profile/:username",(req,res)=>{
    res.send(req.params.username);
    res.send("chal rha h  ")
})
app.listen(8080,()=>{
    console.log('listening on port 8080')
})