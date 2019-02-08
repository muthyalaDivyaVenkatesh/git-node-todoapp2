// create a model
var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
text: {
  type: String,
  required : true,
  minlength:1,
  trim:true
},

completed : {
  type : Boolean,
  default : false
},

completedAt : {
  type: Number,
  default: null
}
});

// we are creating a model instance here
// var totalsave = new Todo({
//   text: 'hi how are you',
//   completed: false,
//   completedAt: 12334
// })
//
// totalsave.save().then((doc) => {
//   console.log("you date is succefully saved",doc);
// },(err) => {
//   console.log(err);
// });

module.exports = {Todo};
