const {MongoClient,ObjectID} = require('mongodb');
// Now we create a db in mongo by using MongoClient.connect

// var obj = new ObjectID()
// console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err) {
  return console.log("There is a error in conection")
}
console.log('Connected to MangoDb server');

db.collection('Todos').insertOne({
text : 'Something to do',
completed: false
},(err,result)=> {
  if(err) {
    return console.log("there is a error in your file")
  }
  console.log(JSON.stringify(result.ops,undefined,2));
})

// it creats the connection to  the db which we created  and it creats a connection inside db
db.collection('Users').insertOne({
_id : 'mdd',
name: 'M.D.Venkatesh',
age: 23,
location : 'chennai',
completed: false
},(err,result) => {
  if(err) {
    return console.log('Unable to insert to do')
  }

  console.log(JSON.stringify(result.ops,undefined,2));
})
db.close();
 });
