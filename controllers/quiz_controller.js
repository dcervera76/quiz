
exports.question = function(req, res){
	res.render('quizes/question',{pregunta: 'Capital de Italia'});
};

//GET /quizes/answer
exports.answer = function(req, res){
	if(req.query.respuesta === 'Roma'){
		res.render('quizes/answer', {respuesta: 'Correcto'});
	}else {
		res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
};

exports.creditos = function(req, res){
	res.render('author', {autor: 'Daniel Cervera Manzanera'});
};
