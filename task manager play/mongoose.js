const mongoose = require('mongoose');

const connectMongooseUrl = 'mongodb://127.0.0.1:27017/task-manager-api';

mongoose.connect(connectMongooseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false
}).then(response => {
    console.log('Play ground: MongoDB is connected!')
}).catch(error => {
    console.log('Playground: Unable to connect to mongoDB!')
});