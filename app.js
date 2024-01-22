const {MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://127.0.0.1:27017/nodemongo')

client.connect()
.then(() => {
    console.log('Connected Successfully & Database Created!')
    client.close();

})
.catch(error => console.log('Failed to connect', error))