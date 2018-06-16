//Get Library MongoDB 
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');
  
    // db.collection('Todos').find({_id:new ObjectId('5b25047e395cd80967ba3127')}).toArray().then((doc)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(doc,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch Todos');
    // })


    db.collection('Todos').find().count().then((doc)=>{
        console.log('Todos');
        console.log(doc);
    },(err)=>{
        console.log('Unable to fetch Todos')
    })

   // client.close();
    
});