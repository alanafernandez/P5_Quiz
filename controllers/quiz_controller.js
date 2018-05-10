
const {models} = require("../models")
const Sequelize = require("sequelize")

// GET / quizzes
exports.index=(req,res,next)=>{
  models.quiz.findAll()
  	.then(quizzes => {
		res.render('quizzes.ejs', {quizzes})
	})
	.catch(error => next(error));
};
