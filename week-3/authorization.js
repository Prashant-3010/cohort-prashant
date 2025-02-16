const express = require("express");
const jwt = require("jsonwebtoken");
const jwtpassword = "123456";

const app = express();
app.use(express.json());
const allusers = [
    {
        username : "prashant@gmail.com",
        password : "3010",
        name : "Prashant Parashar"
    },{
        username : "priya@gmail.com",
        password : "4567",
        name : "Priya"
    },{
        username : "Jack@gmail.com",
        password : "8910",
        name : "Jack"
    },
];

function userexists(username , password) {
    let exists = false;
    for (let i = 0 ; i<allusers.length ; i++) {
        if (allusers[i].username == username && allusers[i].password == password) {
            exists = true;
        }
    }
    return exists;
};

app.post("/signin",function(req,res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userexists(username,password)) {
        return res.status(403).json({
            msg : "User doesn't exist in our database"
        });
    }

    var token = jwt.sign({username : username},jwtpassword);
    return res.json({
        token,
    });
});

app.get("/users", function(req,res) {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token , jwtpassword);
    const username = decoded.username;
    res.json({
        users : allusers.filter(function(i) {
            if (i.username == username) {
                return false;
            } else {
                return true;
            }
        })
    })
});

app.listen(3000);