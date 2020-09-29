const {MongoClient, ObjectId} = require('mongodb')


class Connection {


    async getClienteMongoDB() {

        try {
            const uri =  "mongodb+srv://taciane:010153@projetoapi.j2cj5.mongodb.net/bastards?retryWrites=true&w=majority"
            const client = await new MongoClient(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            await client.connect()
            const db = client.db("bastards")
            
            return { client, db }
        } catch (error) {
            console.log('Connection.getClienteMongoDB', error)

        }
    }


    getObjectId(stringID){
        try{
            return ObjectId(stringID)
        } catch(fail){
            console.log('Connection.getObjectId', fail)
        }
    }
}

module.exports = { Connection }
