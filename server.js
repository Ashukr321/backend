const { executionAsyncResource } = require('async_hooks');
const express = require('express');
const path = require('path');

const app = express();

const users = [];
// middleware 
app.use( express.static(path.join(path.resolve(),"public")))
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs")




app.get('/',(req,res)=>{
    const data = {name:"asutosh",age:"21"};
   res.render('index',data)
})


//create an api for the get all users 
app.get('/users',(req,res)=>{
    res.json(users);
})
app.get('/succes',(req,res)=>{
   res.render('succes')
})



app.post('/',(req,res)=>{
    console.log(req.body);
    users.push({username:req.body.name,email:req.body.email});
    console.log(users);
    res.redirect('./succes')
})
app.listen(8080,()=>{
    console.log("server is runnig");
})