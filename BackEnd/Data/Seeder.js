import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './users.js'
import Users from '../Models/UserModel.js'
import connectDB from '../Config/Database.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Users.deleteMany()
        await Users.insertMany(users)
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

importData()