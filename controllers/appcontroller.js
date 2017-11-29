const db = require('../models');


module.exports = {

    getUserMovies: ()=> {
        db.Users.findOne({id: req.params.id}, (error, existingUser)=> {

        })
    },
    saveUserMovie: ()=> {

    }

}