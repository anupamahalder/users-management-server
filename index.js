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
    {id: 1, name:'Anu',password:'2yewt872'},
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
    const newUser = req.body;
    // set id to newUser 
    newUser.id = users.length + 1;
    // push new user to existing users data 
    users.push(newUser);
    // and send updated users to client side 
    res.send(newUser);
})



//run the server on a port and give an optional callback function
app.listen(port,()=>{
    console.log(`Server is running on PORT: ${port}`);
})