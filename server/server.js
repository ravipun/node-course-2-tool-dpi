
var express  = require('express');
var bodyParser = require('body-parser') 



var {mongoose} = require('./db/mongoose');
var {User} = require('./model/user');
var {Todo} = require('./model/todo');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
      res.status(400).send(e);
    });
});






app.listen(3000,()=>{
    console.log('Start On port 3000');
})








