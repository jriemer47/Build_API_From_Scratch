const model = require('../models/snacks')


// working and tested
getAll = (req, res, next) => {
  // console.log('hello')
  const limit = req.query.limit
  const snacks = model.getAll(limit)

  if (!snacks) {
    return next({
      status: 404,
      message: "Could not get list of snacks"
    })
  }
  res.status(200).json({
    snacks
  })
}

// working and tested
getById = (req, res, next) => {
  const id = req.params.id
  const snacks = model.getById(id)

  if (!snacks) {
    return next({
      status: 404,
      message: `No snack with id of ${id}`
    })
  }
  res.status(200).json({
    snacks
  })
}
// working and tested
create = (req, res, next) => {
  const result = model.create(req.body)
  if (result.error) {
    return next({
      status: 404,
      message: 'Please enter all fields',
      error: result.error
    })
  }
  res.status(201).json({
    result
  })
}

update = (req, res, next) => {
  const id = req.params.id
  const snacks = model.update(id, req.body)

  if (!snacks) {
    return next({
      status: 404,
      message: `No snack with id of ${id}`
    })
  }
  res.status(200).json({
    snacks
  })
}

deleteSnack = (req, res, next) => {
  const id = req.params.id
  const result = model.deleteSnack(id)

  if (result === -1) {
    return next({
      status: 404,
      message: `No snack with id of ${id}`
    })
  }
  res.status(204).json()
}


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteSnack
}