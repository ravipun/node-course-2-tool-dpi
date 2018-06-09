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
    db.collection('Todos').findOneAndUpdate({
        _id : new ObjectId('5b1b4d9803e28a32be197443')
    },{
        $set:{
            completed:true
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });

  

    client.close();
});