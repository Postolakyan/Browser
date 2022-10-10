const express = require("express");
const app = express();
const port = process.env.port || 4444;
const fs = require("fs")
const cors = require("cors")





app.use(cors())
app.get("/:val", (req , res) =>{
    let x = req.params["val"];
    let factorial_of_x=factorial(x*1);
    console.log(factorial_of_x);
    let m = factorial_of_x.toString();
    res.end(m);
});

app.listen(port , err =>{
    if(err){
        return console.log("ERROR", err);
    }
    console.log(`Listening on port ${port}`);
});

function factorial(x) {

    // if number is 0
    if (x == 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}





