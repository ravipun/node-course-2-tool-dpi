// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');

var obj = new ObjectId();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        console.log('Unable to Connect to DB Server');
    }     
    console.log('Connected to mongo DB Server');

    const db = client.db('TodoApp')

    //Delete Many
    db.collection('Users').deleteMany({text:'Eat Launch'}).then((result)=>{
        console.log(result);
    });
    //Delete One
     db.collection('Users').deleteOne({name:'Andrew'}).then((result)=>{
        console.log(result);
    });
    //find One and Delete
     db.collection('Users').findOneAndDelete({name:'Andrew'}).then((result)=>{
        console.log(result);
    });

    client.close();
});