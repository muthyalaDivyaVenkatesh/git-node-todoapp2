var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

// use bodyParser

app.use(bodyParser.json());
// post app
// app.post('/todos', (req, res) => {
//   var todo = new Todo({
//     text:req.body.text
//   });
//   todo.save().then((doc) => {
//     res.send(`here is the saved doc${doc}`)
//   },(e) => {
//     res.send(`here is the error which had occured${e}`)
//   })
// });

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text:req.body.text,
    completed:true,
    completedAt:44-56-78
  });
  todo.save().then((doc) => {
    res.send(`here is the saved doc${doc}`)
  },(e) => {
    res.send(`here is the error which had occured${e}`)
  })
});


app.listen(3000,()=> {
  console.log("Started on the port");
});
