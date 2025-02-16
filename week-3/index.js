const express = require("express");
const zod = require("zod");
const app = express();
const schema = zod.array(zod.number());

app.use(express.json());
app.post("/health-check",function(req , res) {
    // kidney = [1,2]
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney)
    if(!response.success) {
        res.json({
            msg : "Input is invalid"
        })
    }
    res.send({
        response
    })
})

app.listen(3000);