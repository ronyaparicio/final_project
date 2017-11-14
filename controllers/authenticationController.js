const db = require('../models');

module.export = {
  create: (req, res)=> {
    db.User
      .create(req.body) 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
}