import mongoose from 'mongoose'

const connect_mongodb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to the mongodb server')
    } catch (error) {
        console.log('Error Connecting to the Mongodb',error.messafe)
    }
} 

export default connect_mongodb;