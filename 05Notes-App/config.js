const mongoose = require('mongoose')

const DB_Connection = async () => {
    try {
        //  await mongoose.connect("mongodb+srv://nisha:Re5Jp727ECHaxfkq@cluster0.6yblnj1.mongodb.net/mystorage?retryWrites=true&w=majority&appName=Cluster0")
         await mongoose.connect("mongodb+srv://nishabangali214_db_user:aWqKx6CVtKUWtnzs@cluster0.y98iycl.mongodb.net/testStorage")
         console.log('MongoDB connected successfully')
        
    } catch (error) {
        console.log(error)
               
    }
}

module.exports = DB_Connection