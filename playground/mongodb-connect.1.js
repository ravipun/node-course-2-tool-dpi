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
    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false
    // },(err,res)=>{
    //     if(err){
    //         return console.log('Unable to Insert Todos');
    //     }
    //     console.log(JSON.stringify(res.ops,undefined,2));
    // });

    // client.close();


    db.collection('Users').insertOne({
        
        name:'Andrew',
        age:25,
        location:'Philadephia'

    },(err,res)=>{
        if(err){
            return console.log('Unable to Insert to User Collection')
        }

        console.log(res.ops[0]._id.getTimestamp());
        
    })

    
});