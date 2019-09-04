var express = require('express');
var router = express.Router();

router.get('/:playerName/:question', function (req, res, next) {

	res.render('game', {
		question: 'qual a cor do céu?',
		options: [
			{answer: 'azul', isRightAnswer: true},
			{answer: 'vermelho', isRightAnswer: false},
			{answer: 'verde', isRightAnswer: false},
			{answer: 'caramelo', isRightAnswer: false},
		]
	});
});

module.exports = router;