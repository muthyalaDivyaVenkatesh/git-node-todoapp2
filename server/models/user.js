var mongoose = require('mongoose');

var User = mongoose.model('User',{
email: {
  type: String,
  required : true,
  minlength:1,
  trim:true
}
});

// we are creating a new  instance of the model here
// var Newemail = new Todonew({
//   email: 'mdvenkatesh1421@gmail.com',
//   completed: false,
//   completedAt: 12334
// })
//
// // we are  saving the model by save method
// Newemail.save().then((doc)=>{
//   console.log("your mail is succefull saved",doc);
// }, (err)=>{
//   console.log("error",err);
// })

module.exports = {User};
