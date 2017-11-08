const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const passport = require("passport");
const path = require('path');
const app = express();

const routes = require("./controllers/controller.js");
const PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});