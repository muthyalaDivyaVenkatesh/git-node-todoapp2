const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {

if(err) {
  return console.log('Unable to connect the server');
}

console.log('connected to mongodb server');
//
// db.collection('Todos').find().count().then((count) => {
//
//   console.log(`Todos count : ${count}`);
// },(err)=> {
//   console.log('Unable to find the todos',err);
// });
db.collection('Users').find({name:'M.D.Venkatesh'}).toArray().then((name) => {

  console.log(JSON.stringify(name,undefined,2));
},(err)=> {
  console.log('Unable to find the todos',err);
});


// db.close();
})
