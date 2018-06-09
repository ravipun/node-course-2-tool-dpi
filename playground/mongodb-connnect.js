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

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false

    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todos',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    //Insert new doc into Users (name,age,location)

    // db.collection('Users').insertOne({
    //     name:'Andrew',
    //     age:25,
    //     location:'Philadephi'
    // },(error,result)=>{
    //     if(err){
    //         return console.log('Unable to insert Users',err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // });


    client.close();
});