const express = require('express');
const app = express();
const bcrypt = require('bcrypt');



app.get('/',(req,res) => {
    res.send("Welcome Uttam maurya ");
})

//app.get('/profile',(req,res) => {
 //   bcrypt.genSalt(10, function(err, salt) {
   //     bcrypt.hash("uttam", salt, function(err, hash) {
   //         console.log(hash);


            bcrypt.compare("uttam", "$2b$10$VRLoZCkNvRpbrGwtxdYZLOrCI..bBrL4Lk6Yfwxb1avvXUiqXw77C", function(err, result) {
                console.log(result);
            });
   //     });
  //  });
//})






app.listen(4500,()=>{
    console.log("Server is running on port 4500");
})

