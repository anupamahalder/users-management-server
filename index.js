const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// process.env.PORT is used to assign a random port from where we are going to deploy 
const port = process.env.port || 5000;

// middleware
app.use(cors());
app.use(express.json());

// create some hard coded data 
// const users = [
//     {id: 1, name:'Anu',password:'2yewt872'},
// ]
// mongodb connection 

const uri = "mongodb+srv://anupamahalder2022:zhP4sJLOaJOlQ3IU@usermanagement.ycasaad.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    //add data to database
    const usersCollection = client.db("usersDB").collection('users');

    // create an api for get all data from server to client  
    app.get('/users', async(req, res)=>{
        const cursor = usersCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    // create an api to get data from client side using id 
    app.get('/users/:id', async(req, res)=>{
      const id = req.params.id;
      // we will find data using id field 
      const query = {_id: new ObjectId(id)};
      const user = await usersCollection.findOne(query);
      res.send(user);
    })

    // create an post api
    app.post('/users',async(req,res)=>{
        const user = req.body;
        console.log('new user',user);
        // insert data after post 
        const result = await usersCollection.insertOne(user);
        // send data which mongodb will return 
        res.send(result);
    })

    // create a put api to update user (if already existing user then update only else create it)
    app.put('/users/:id', async(req, res)=>{
      const id = req.params.id;
      const user = req.body;
      // backend is receiving data or not so console.log 
      console.log(user);
      // send data to database with id field
      const filter = {_id: new ObjectId(id)};
      // if data in database not found then insert this data in database 
      const option = {upsert: true};
      const updatedUser = {
        $set:{
          // upadate property with new value getting from client side 
          name: user.name,
          email: user.email
        }
      }
      // first parameter is something by which we can get the user and second parameter is the updatedUser and third parameter is option
      const result = await usersCollection.updateOne(filter, updatedUser, option);
      // send to client side 
      res.send(result);
    })
    //create a delete api in url we can give id dynamically
    app.delete('/users/:id',async(req, res)=>{
      // get the id 
      const id = req.params.id;
      console.log('Please delete from database',id);
      // giving _id to match for delete from database
      const query = {_id: new ObjectId(id)}
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


// create a route (root/main route)
app.get('/',(req,res)=>{
    res.send("Server is running...");
})

// create an api 
// app.get('/users',(req,res)=>{
//     res.send(users);
// })
// create an post api in server side and to access post we have to mention it from client side
// app.post('/users',(req, res)=>{
//     // data from client side will be send via body so we gonna get that into body
//     console.log(req.body);
//     console.log('post api is hitting!');
//     const newUser = req.body;
//     // set id to newUser 
//     newUser.id = users.length + 1;
//     // push new user to existing users data 
//     users.push(newUser);
//     // and send updated users to client side 
//     res.send(newUser);
// })


//run the server on a port and give an optional callback function
app.listen(port,()=>{
    console.log(`Server is running on PORT: ${port}`);
})