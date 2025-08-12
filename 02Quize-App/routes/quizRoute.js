const express = require('express')
const { handelSelectQuiz, handleQuizQues } = require('../controllers/quizController')

const router = express.Router()

router.get('/',(req,res)=>{
     res.render('home'); 
})

router.get('/quiz/:topic', handelSelectQuiz);
router.post('/submit/:topic', handleQuizQues)

module.exports = router