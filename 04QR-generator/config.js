const mongoose = require('mongoose')

const DB_Connection = async () => {
    try {
         await mongoose.connect("mongodb+srv://nishabangali214_db_user:aWqKx6CVtKUWtnzs@cluster0.y98iycl.mongodb.net/testStorage")
         console.log('MongoDB connected successfully')
        
    } catch (error) {
        console.log(error)
               
    }
}

module.exports = DB_Connection