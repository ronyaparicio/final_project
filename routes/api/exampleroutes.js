const router = require("express").Router();
const ensureAuthenticated = require('./ensureauth.js');

router.post('/example',ensureAuthenticated, (req,res)=> {

});