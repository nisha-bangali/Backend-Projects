const express = require('express')
const path = require('path');
const quizRouter = require('./routes/quizRoute')

const app = express()
const port = 4000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));


app.use('/', quizRouter);





app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})