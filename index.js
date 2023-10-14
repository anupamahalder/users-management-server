const express = require('express');
const app = express();
// to avoid any issue regarding port after deployment 
const port = process.env.PORT || 5000;

// create a route and to make it run we will listen it later
app.get('/',(req, res)=>{
    res.send('Users Management server is running...');
})
//listen to the port then you can give an optional callback function 
app.listen(port, ()=>{
    console.log(`server is running on PORT: ${port}`);
})