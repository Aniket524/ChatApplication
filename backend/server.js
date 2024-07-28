import express from 'express'
import dotEnv from 'dotenv'
import userRouter from './routes/user.routes.js'
import mongo_connect from './db/mongodb_connection.js'

const app = express()
dotEnv.config()

const PORT = process.env.PORT || 8000
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Welcome to the Chat Applications Backend')
})

app.use('/api/auth',userRouter)

app.listen(PORT,()=>{
    mongo_connect();
    console.log(`App is running on port ${PORT}`)
})