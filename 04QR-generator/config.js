const mongoose = require('mongoose')

const DB_Connection = async () => {
    try {
         await mongoose.connect(process.env.DB_URL)
         console.log('MongoDB connected successfully')
        
    } catch (error) {
        console.log(error)
               
    }
}

module.exports = DB_Connection