const express = require('express')
require('dotenv').config()
const path = require('path');
const connectDB = require('./config');
const videoRoute = require('./routes/videoRoute')
const port = process.env.PORT || 4000

const app = express()

connectDB()



app.set('view engine', 'ejs');
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: true }));

app.use('/',videoRoute )

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})




// https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json