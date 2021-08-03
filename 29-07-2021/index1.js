const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

const staticpath = path.join(__dirname, "/");
app.use(express.static(staticpath));
console.log(staticpath);



app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.listen(port,() => {
    console.log('listening the port');
});