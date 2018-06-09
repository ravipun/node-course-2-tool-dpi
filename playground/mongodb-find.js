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

  
    // db.collection('Todos').find({_id: new ObjectId('5b1b4d9803e28a32be197443')}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to Fetch todos',err);
    // });


    //   db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos counts ${count}`);
    // },(err)=>{
    //     console.log('Unable to Fetch todos',err);
    // });


    db.collection('Users').find({name:'Andrew'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    })

   // client.close();
});