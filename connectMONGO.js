const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://baophunginfo:kIBvFeojkxl4eoSg@jiahbot.lzryk2q.mongodb.net/?retryWrites=true&w=majority&appName=jiahbot";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if (err) {
        console.error('Connection failed', err);
    } else {
        console.log('Connected successfully');
    }
    client.close();
});