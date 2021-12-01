//import the express package
import express from "express";

import dotenv from "dotenv";
dotenv.config();

//create an instace of express
const app=express();

//import mongoose
import mongoose from "mongoose";

// use this port for our server
const PORT = process.env.PORT?? 5000;



// create a route to handle GET request o the index route
app.get("/", (request, response)=>{
    response.send("Hello World");
});

mongoose.connect(process.env.mongo_DB_CONTRING, (error)=>{
   
if (error) {
    return console.log ("couldn't connect to MongoDB");
}
else{
    console.log("Connection to MongoDB was successful");
}


});
//listen to incoming request on this port
app.listen(port, ()=>console.log(`server is active on: ${port}`)
);