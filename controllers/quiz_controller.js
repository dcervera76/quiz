
var models = require('../models/models.js');

<<<<<<< HEAD

// Autoload :id
exports.load = function(req, res, next, quizId) {
  models.Quiz.find(quizId).then(
		function(quiz) {
      if (quiz) {
        req.quiz = quiz;
        next();
      } else{next(new Error('No existe quizId=' + quizId))}
    }
  ).catch(function(error){next(error)});
};



=======
>>>>>>> origin/master
exports.index = function(req, res){
	models.Quiz.findAll().then(function(quizes){
		res.render('quizes/index',{quizes: quizes});
	})
};


exports.show = function(req, res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
<<<<<<< HEAD
		res.render('quizes/show',{quiz: req.quiz});
=======
		res.render('quizes/show',{quiz: quiz});
>>>>>>> origin/master
	})
};

//GET /quizes/answer
exports.answer = function(req, res){
<<<<<<< HEAD
var resultado = 'Incorrrecto';
	if(req.query.respuesta === req.quiz.respuesta){
		resultado = 'Correcto';
=======
	models.Quiz.find(req.params.quizId).then(function(quiz){

	if(req.query.respuesta === quiz.respuesta){
		res.render('quizes/answer',
		            {quiz: quiz, respuesta: 'Correcto'});
	}else {
		res.render('quizes/answer',
		            {quiz: quiz, respuesta: 'Incorrecto'});
>>>>>>> origin/master
	}
		res.render('quizes/answer', {quiz: req.quiz, respuesta: resultado});
};

exports.creditos = function(req, res){
	res.render('author', {autor: 'Daniel Cervera Manzanera'});
};
