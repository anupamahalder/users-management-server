/**
 * 1. create a post api on the server side
 * 2. from client side send data via post
 * 3. set fetch method inside the fetch options(second parameter)
 * 4. options will have three things: method
 * 5. options will have headers: 'content-type':'application/json'
 * 6. don't forget to send data by JSON.stringify in the body.
 * 7. on the server side don't forget to use express.json() middleware to get data from client
 */

/**
 * -------------------------------
 * MongoDB Connection
 * -------------------------------
 * 1. create account
 * 2. create an user with password
 * 3. whitelist IP address
 * 4. database > connect > driver > Node > view full code
 * 5. change the password the uri
 * 
 * CRUD---> CREATE
 * 
 * -------------------------------
 * SERVER SIDE 
 * -------------------------------
 * 1. CREATE --- POST api in server side
 * 2. app.post('/users', async(req, res)=>{})
 * 3. Make the function async to use await inside it
 * 4. Make sure you use the express.json() middleware
 * 5. access data from the body: const user = req.body
 * 6. const result = await userCollection.insertOne(user);
 * 7. res.send(result)
 * 
 * ---------------------------------
 * CLIENT SIDE 
 * ---------------------------------
 * 1. create fetch
 * 2. add second parameter as an object
 * 3  provide method: 'POST'
 * 4. add headers: {'content-type':'application/json'}
 * 5. add body: JSON.stringify(user)
 * ----------------------------------
 * 
 * CRUD --> READ (MANY)
 * 
 * ----------------------------------
 * SERVER SIDE
 * ----------------------------------
 * 1. create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 * 
 * ----------------------------------
 * CLIENT SIDE
 * ----------------------------------
 * 1. load data using fetch in route and useLoaderData() to the component
 * ----------------------------------
 * 
 * CRUD --> DELETE
 * 
 * ----------------------------------
 * SERVER SIDE
 * ----------------------------------
 * 1. create app.delete('/users/:id', async(req, res)=>{})
 * 2. specify unique ObjectId to delete the right user
 * 3. const query = { _id: new ObjectId(id)}
 * 4. const result = await userCollection.deleteOne(query);
 * 
 * ----------------------------------
 * CLIENT SIDE
 * ----------------------------------
 * 1. create dynamic url with id
 * 2. mention the DELETE method 
 * -----------------------------------
 */
