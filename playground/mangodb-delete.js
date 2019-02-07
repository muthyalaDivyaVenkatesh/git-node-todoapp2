const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {

if(err) {
  return console.log('Unable to connect the server');
}

console.log('connected to mongodb server');

// deleteMany
// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
//   console.log(result);
// });
//
// // deleteone
// db.collection('Todos').deleteOne({text:'Hi'}).then((result) => {
//   console.log(result);
// });

// findoneDelete
// db.collection('Todos').findOneAndDelete({completed:true}).then((result) => {
//   console.log(result);
// });

//delete by id
// "5c5bfddbcaf2507d1b50307b"
// db.collection('Todos').findOneAndDelete({_id:new ObjectID("5c5bfddbcaf2507d1b50307b")}).then((result) => {
//   console.log(result);
// });

// db.close();
})
