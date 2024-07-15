const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/',(req, res)=>{
    res.send('Hello World');
})


app.get('/create', async (req, res)=>{
let userCreated = await userModel.create({
    name:'Uttam maurya',
    email:'uttam@gmail.com'
   })
   res.send(userCreated);
})



app.get('/update', async (req, res)=>{
  let updateduser = await userModel.findOneAndUpdate({name:'Uttam maurya'},{name:'Uttam'},{new:true})
  res.send(updateduser);
})




app.get('/read', async (req, res)=>{
 let users = await  userModel.find();
 res.send(users);
})




app.get('/delete', async (req, res)=>{
    let deleteduser = await userModel.findOneAndDelete({name:'Uttam'},{new:true})
        res.send(deleteduser);
})






app.listen(4500,()=>{
    console.log('Server is running on port 4500');
})