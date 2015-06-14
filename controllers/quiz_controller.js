
var models = require('../models/models.js');

<<<<<<< HEAD

exports.load = function(req, res, next, quizId) {
  models.Quiz.find(quizId).then(
   function(quiz) {
      if (quiz) {
        req.quiz = quiz;
        next();
      } else{next(new Error('No existe quizId=' + quizId));}
    }
  ).catch(function(error){next(error);});
};


=======
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
>>>>>>> origin/master
exports.index = function(req, res){

  if(req.query.search) {
    var filtro  = (req.query.search || '').replace(" ", "%");
    models.Quiz.findAll({where:["pregunta like ?", '%'+filtro+'%'],order:'pregunta ASC'}).then(function(quizes){
	  res.render('quizes/index', {quizes: quizes});
	}).catch(function(error) { next(error);});

  } else {

   models.Quiz.findAll().then(function(quizes){
       res.render('quizes/index', {quizes: quizes});
       }).catch(function(error) { next(error);});
  }
};


exports.show = function(req, res){
<<<<<<< HEAD
		res.render('quizes/show',{quiz: req.quiz});
=======
	models.Quiz.find(req.params.quizId).then(function(quiz){
<<<<<<< HEAD
		res.render('quizes/show',{quiz: req.quiz});
=======
		res.render('quizes/show',{quiz: quiz});
>>>>>>> origin/master
	})
>>>>>>> origin/master
};

//GET /quizes/answer
exports.answer = function(req, res){
<<<<<<< HEAD
	var resultado = 'Incorrecto';

	if(req.query.respuesta === req.quiz.respuesta){
		resultado = 'Corrrecto';
	}
	res.render('quizes/answer',{quiz: req.quiz, respuesta: resultado});
=======
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
>>>>>>> origin/master
};

exports.creditos = function(req, res){
	res.render('author', {autor: 'Daniel Cervera Manzanera'});
};
