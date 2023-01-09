
// Lec:2 002 Creating Our First Server with Express

const express = require("express");

const app  = express();

app.listen(3000 , function(){   // set up and started with the server
    console.log("Server started on port : 3000");
});

  
      // Lecture 3  Handling Requests and Responses_ the GET Request 

// we have to send info to browser to display

app.get("/" , function(req , res){
  // console.log(req);
  // res.send("hello  world");
  res.send(" <h1>hello  world </h1> ");   // triggering the response ..  send back a respose that back with a msh hello world
})


// lec 4 


app.get("/contact" , function(req , res){
  res.send(" Contact me at : techshivam02@gmail.com ");   // triggering the response ..  send back a respose that back with a msh hello world
})


app.get("/about" , function(req , res){
  res.send(" <h2>Hi I m TechShivam .. </h2> ");   // triggering the response ..  send back a respose that back with a msh hello world
})

app.get("/hobbies" , function(req , res){
  res.send(" <ul> <li>Eat </li>  <li>Code </li> <li>Repeat </li>  </ul>   ");   // triggering the response ..  send back a respose that back with a msh hello world
})
