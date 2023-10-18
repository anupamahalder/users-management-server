const express = require('express');
const cors = require('cors');
const app = express();
// process.env.PORT is used to assign a random port from where we are going to deploy 
const port = process.env.port || 5001;

// middleware
app.use(cors());
app.use(express.json());

// create some hard coded data 
const users = [
    {id: 1, name:'Anu',age:22},
    {id: 2, name:'Rup',age:20},
    {id: 3, name:'Niru',age:27},
    {id: 4, name:'Sumitra',age:42},
]

// create a route (root/main route)
app.get('/',(req,res)=>{
    res.send("Server is running...");
})

// create an api 
app.get('/users',(req,res)=>{
    res.send(users);
})
// create an post api in server side and to access post we have to mention it from client side
app.post('/users',(req, res)=>{
    // data from client side will be send via body so we gonna get that into body
    console.log(req.body);
    console.log('post api is hitting!');
})



//run the server on a port and give an optional callback function
app.listen(port,()=>{
    console.log(`Server is running on PORT: ${port}`);
})