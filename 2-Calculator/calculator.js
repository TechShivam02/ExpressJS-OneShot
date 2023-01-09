const express = require("express");
const app = express(); // setup a new app that is going to be use the express module


const bodyParser = require("body-parser");  // it allows to parse the info that we sent from the post request 

app.listen(3000 , function(){
    console.log("server is Running at port 3000 :::: ");
})



// app.use(bodyParser.text()); // parse over the req into text;
// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}));


// home route
app.get("/" , function(req,res){
    // res.send("hello I am a Calculator");
    // res.sendFile("index.html");

    console.log(__dirname);   // E:\ZZZBackend Dev_AngelaYU\2-ExpressJS\calculator  // it give path of current file , where it is present   or ls of current directory  on terminal 
    res.sendFile(__dirname + "/index.html");    // E:\ZZZBackend Dev_AngelaYU\2-ExpressJS\calculator  +  /index.html

});


// lecture - 10;

app.post("/" , function(req,res){   // post 

    // console.log(req.body);    //  { num1: '4', num2: '3', submit: '' }
    // res.send("Thanks for entering the data"); 


    var n1 = Number(req.body.num1);  // num1 is name for input 1  , write Number in front of req.body.num1
    var n2 = Number(req.body.num2);  // num2 is name for input 1

    var ans = n1+n2;

    res.send("your Cal ans is : " + ans);
     

})
 