
var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.sendFile(__dirname+ "/form.html")
});


app.get("/form", function(req, res) {
    var num1 = parseInt(req.query.num1);
    var num2 = parseInt(req.query.num2);
    var sum = num1 + num2;
    console.log(sum);
    res.send("sum:"+sum);
    res.end();
    //further operations to perform
});
app.listen(3000);