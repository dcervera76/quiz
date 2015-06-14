var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

<<<<<<< HEAD
//Autoload de comandos con: quizId
router.param('quizId', quizController.load)
=======
<<<<<<< HEAD
// Autoload de comandos con ids
router.param('quizId', quizController.load);  // autoload :quizId

=======
>>>>>>> origin/master
>>>>>>> origin/master

//definicion de rutas de quizes
router.get('/quizes',                      quizController.index);
router.get('/quizes/:quizId(\\d+)',        quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/author', quizController.creditos);

module.exports = router;
