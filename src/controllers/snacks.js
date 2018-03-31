const model = require('../models/snacks')


getAll = (req, res, next) => {
  if (model.getAll()) res.status(200).send(model.getAll())
  else res.status(400).send()
}


module.exports = {
  getAll
}