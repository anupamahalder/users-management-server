const express = require('express');
const app = express();
// to avoid any issue regarding port after deployment 
const port = process.env.PORT || 5000;

//here we can create some hard coded data 
const users=[
    {id: 1, name:'Sabana', email:'sabana@gmail.com'},
    {id: 2, name:'Sabila', email:'sabila@gmail.com'},
    {id: 3, name:'Sabnur', email:'sabnur@gmail.com'},
    {id: 4, name:'Sahanaz', email:'sahanaz@gmail.com'},
    {id: 5, name:'Simul', email:'simul@gmail.com'},
]

// create a route and to make it run we will listen it later
app.get('/',(req, res)=>{
    res.send('Users Management server is running...');
})

// create a special api 
app.get('/users',(req,res)=>{
    res.send(users);
})

//listen to the port then you can give an optional callback function 
app.listen(port, ()=>{
    console.log(`server is running on PORT: ${port}`);
})