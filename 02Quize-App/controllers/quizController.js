const htmlQuestions = require('../utils/html')
const cssQuestions  = require('../utils/css')
const jsQuestions  = require('../utils/javascript')
const reactQuestions = require('../utils/react')


const handelSelectQuiz = (req, res) => {
  const topic = req.params.topic;
  let questions;

  switch (topic) {
    case 'html':
      questions = htmlQuestions;
      break;
    case 'css':
      questions = cssQuestions;
      break;
    case 'js':
      questions = jsQuestions;
      break;
    case 'react-js':
      questions = reactQuestions;
      break;
    default:
      return res.status(404).send('Quiz not found');
  }
  res.render('quiz', { questions, topic });
}

const handleQuizQues = (req, res) => {
  const topic = req.params.topic;
  const userAnswers = req.body;
  let questions;

  switch (topic) {
    case 'html':
      questions = htmlQuestions;
      break;
    case 'css':
      questions = cssQuestions;
      break;
    case 'js':
      questions = jsQuestions;
      break;
    case 'react-js':
      questions = reactQuestions;
      break;
    default:
      return res.status(404).send('Quiz not found');
  }
  let score = 0;

  const results = questions.map((q, i) => {
    const userAnswer = userAnswers[`q${i}`];
    const isCorrect = userAnswer === q.answer;
    if (isCorrect) score++;

    return {
      question: q.question,
      options: q.options,
      correctAnswer: q.answer,
      userAnswer,
      isCorrect
    };
  });

  res.render('result', { score, total: questions.length, results, topic });
}




module.exports = { handelSelectQuiz,handleQuizQues }