const model = require('../models/snacks')


// working and tested
getAll = (req, res, next) => {
  if (model.getAll()) res.status(200).send(model.getAll())
  else res.status(400).send()
}

getById = (req, res, next) => {
  const id = req.params.id
  model.getById(id, (result, error) => {
    if (error) {
      res.status(404).send("ID not found")
    }
    if (res.body.length === 0) {
      res.status(404).json({
        status: 404,
        message: `Snack with ${id} does not exist`
      })
    }
    res.status(200).json(result[0])
  })
}

create = (req, res, next) => {
  let item = req.body
  model.create(item, (result, error) => {

    if (error) {
      res.status(404).send("Error entering new snack")
    }
    if (result.length === 0) {
      res.status(404).json({
        status: 404,
        message: 'Error entering new snack'
      })
    }
    res.status(200).json(result)
  })
}


module.exports = {
  getAll,
  getById,
  create
}