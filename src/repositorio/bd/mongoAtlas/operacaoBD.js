const { ObjectID } = require('mongodb')
const { Connection } = require('./conexaoBD')


class OperatorsDB extends Connection
{
   async save(collection, data)
    {
        try
        {
            const { client, db } = await this.getClienteMongoDB()
            console.log('db', db, 'client', client)
            await db.collection(collection).insertOne(data)
            client.close()
            return data
        }catch(error)
        {
            console.log('Operators.save', error)
        }

    }


    async find(collection, query)
    {   
        try
        {
            const { client, db } = await this.getClienteMongoDB()
            const cursor = await db.collection(collection).find(query);
                                

            const allElements = []
            await cursor.forEach(element => allElements.push(element))      
            client.close()
            return allElements
        }
        catch(error)
        {
            console.log('Operators.find', error)
        }
        
    }


    async findById(collection,  id)
    {
        try
        {
            const query = {_id: this.getObjectId(id) }

            const { client, db } = await this.getClienteMongoDB()
            const user = await db.collection(collection).findOne(query)
            client.close()
            return user
        }catch(error)
        {
            console.log('Operators.findById', error)
        }

    }

    async deleteById(collection, id) {
        try {

            const query = {_id: this.getObjectId(id)}
            const { client, db } = await this.getClienteMongoDB()
            const user = await db.collection(collection).findOneAndDelete(query)
            client.close()
            return user
        } catch (error) {
            console.log('Operators.DeleteById', error)
        }
    }

    async UpdateUser(collection, id, data) {
        try {
            
            const query = {_id: this.getObjectId(id)}
            const { client, db } = await this.getClienteMongoDB()
            const user = await db.collection(collection).findOneAndReplace(query, data)
                
            client.close()
            return user
        } catch (error) {
            console.log('Operators.UpdateUser', error)
        }
    }

}

module.exports = { OperatorsDB }