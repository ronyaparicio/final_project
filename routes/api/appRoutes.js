const router = require("express").Router();
const ensureAuthenticated = require('./ensureauth.js');

router.get('/userMovies/:id', function(req, res) {
    console.log(req.params.id);
});


module.exports = router;