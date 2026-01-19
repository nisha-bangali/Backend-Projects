require("dotenv").config()
const express = require('express')
const DB_Connection = require('./config')
const qrRoute = require('./routes/qrRoute')
const app = express()
const port = process.env.PORT || 3000

DB_Connection()
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/',qrRoute)



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})