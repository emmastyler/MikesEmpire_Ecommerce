import express from 'express'
import dotenv from 'dotenv'
import connectDB from './Config/Database.js'



dotenv.config()
connectDB()
const app = express()




const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))