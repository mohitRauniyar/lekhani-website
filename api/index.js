import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(
    process.env.MONGODB_URI
).then(()=>{
    console.log('MongoDB is connected.')
}).catch((err)=>{
    console.error(err)
})

const app = express()

app.listen(9000, ()=>{
    console.log('Server is running on port 9000!!')
})