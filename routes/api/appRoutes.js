const router = require("express").Router();
const ensureAuthenticated = require('./ensureauth.js');
const appController = require('../../controllers/appcontroller.js');


router.get('/userMovies/:id', function(req, res) {
    console.log('res is - '+ res);
    return appController.getUserMovies(req,res)
});


module.exports = router;



