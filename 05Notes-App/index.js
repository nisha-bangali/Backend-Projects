const express = require('express')
const DB_Connection = require('./config')
const noteRoute = require('./routes/noteRoute')
const app = express()
const port = 3000

DB_Connection()
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.use('/',noteRoute)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})