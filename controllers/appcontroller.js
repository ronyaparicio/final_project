const db = require('../models');


module.exports = {

    getUserMovies: ()=> {
        db.Users.findOne({id: req.params.id}, (error, existingUser)=> {

        })
    },

    saveUserMovie: (userId, movieId)=> {
    	console.log(db.Users);
    	db.Users.findOneAndUpdate({_id: userId}, 
    		{"$push": {movies: movieId} },
    		function(error, raw) {
    			if (error) return error;
    			console.log(raw);
    		}
    	)
    	

    }

}