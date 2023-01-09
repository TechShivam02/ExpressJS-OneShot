const express = require("express");

const bodyParser = require("body-parser");  // it allows to parse the info that we sent from the post request 


const app = express(); // setup a new app that is going to be use the express module

app.use(bodyParser.urlencoded({extended : true}));



app.listen(3000 , function(){
    console.log("Techshivam , server is Running at port 3000 ");
})



app.get("/" , function(req,res){   // what happens when the user go to the home page  , i gonna send the send file , the path

    console.log("This is fila path : " + __dirname);   
    res.sendFile(__dirname + "/bmiCalculator.html");

});


        // so what happens if somebody tries to make the post request on this route
app.post("/bmicalculator" , function(req,res){   
    
    // console.log(req.body);    //  { num1: '4', num2: '3', submit: '' }
    // res.send("Thanks for entering the data"); 


    var weight = parseFloat(req.body.myweight);  // myweight is name for input 1  , write parseFloat in front of req.body.myweight
    var height = parseFloat(req.body.myheight);  //  myheight is name for input 1  , write parseFloat in front of req.body.myheight

    var ans = weight / (height*height);

    res.send(" Your BMI  is : " + ans);
     

})
 