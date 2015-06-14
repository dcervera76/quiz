
var models = require('../models/models.js');


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
		res.render('quizes/show',{quiz: req.quiz});
};

//GET /quizes/answer
exports.answer = function(req, res){
	var resultado = 'Incorrecto';

	if(req.query.respuesta === req.quiz.respuesta){
		resultado = 'Corrrecto';
	}
	res.render('quizes/answer',{quiz: req.quiz, respuesta: resultado});
};

exports.creditos = function(req, res){
	res.render('author', {autor: 'Daniel Cervera Manzanera'});
};
