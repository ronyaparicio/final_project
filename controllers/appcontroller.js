const db = require('../models');


module.exports = {

	getUserMovies: (userId) => {
		db.Users.findOne({_id: UserId},
			"movies",
			function(error, userMovies) {
				if(error) return error;
				console.log(userMovies);
			}
		)
	},

	saveUserMovie: (userId, movieId)=> {
		// console.log(db.Users);
		db.Users.findOneAndUpdate({_id: userId}, 
			{"$push": {movies: movieId} },
			function(error, raw) {
				if (error) return error;
				console.log(raw);
			}
		)
	}
}