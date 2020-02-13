const mongoose = require('mongoose');

const URI = "mongodb://admin:root@cluster0-shard-00-00-8zgqm.mongodb.net:27017,cluster0-shard-00-01-8zgqm.mongodb.net:27017,cluster0-shard-00-02-8zgqm.mongodb.net:27017/siembra?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db connected..!');
};

module.exports = connectDB;