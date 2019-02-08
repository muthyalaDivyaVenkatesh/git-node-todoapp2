var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

// use bodyParser

app.use(bodyParser.json());
// post app


app.post('/todos', (req, res) => {
  var todo = new Todo({
    text:req.body.text,
  });
  todo.save().then((doc) => {
      res.send(doc);
  },(e) => {
      res.status(400).send(e);
  })
});

app.listen(3000,()=> {
  console.log("Started on the port");
});

module.exports = {app};
