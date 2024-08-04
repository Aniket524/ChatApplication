import express from 'express'
import dotEnv from 'dotenv'
import authRouter from './routes/auth.routes.js'
import messageRouter from './routes/message.routes.js'
import userRouter from './routes/user.routes.js'


import mongo_connect from './db/mongodb_connection.js'
import cookieParser from 'cookie-parser'

const app = express()
dotEnv.config()

const PORT = process.env.PORT || 8000
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRouter);
app.use('/api/message',messageRouter);
app.use('/api/user',userRouter)


app.get('/',(req,res)=>{
    res.send('Welcome to the Chat Applications Backend')
})

app.listen(PORT,()=>{
    mongo_connect();
    console.log(`App is running on port ${PORT}`)
})