//const cookieParser = require('cookie-parser'); 
const express = require('express');
const app = express();
const bcrypt = require('bcrypt'); 




// if you want to set the cookie then use res.cookie
app.get('/',(req,res) => {
    res.cookie('name',"uttam");
    res.send("done");
});

// if you want to read the cookie then apply req.cookies
app.get('/read',(req,res)=>{
    console.log(req.cookies);
    res.send('read page')
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})