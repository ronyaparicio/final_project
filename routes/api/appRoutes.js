const router = require("express").Router();
const ensureAuthenticated = require('./ensureauth.js');
const dbORM = require("../../controllers/appcontroller");


router.get('/userMovies/:id', function(req, res) {
    console.log(req.params.id);
});

router.post('/savemovie', function(req, res){
	var userId = req.body.userId;
	var movieId = req.body.movieId;
	dbORM.saveUserMovie(userId, movieId);
})


module.exports = router;