const express = require("express");

const app = express();

function middleware (req,res,next) {
    const age = req.query.age;
    if(age >=14) {
        next();
    } else {
        res.json({
            msg : "you are not eligible"
        })
    }
};

app.get("/ride1" , middleware , function(req,res) {
    res.json({
        msg : "you have succefully riden ride 1"
    })
});

app.get("/ride2" , middleware , function(req,res) {
    res.json({
        msg : "you have succefully riden ride 2"
    })
});

app.listen(3000);