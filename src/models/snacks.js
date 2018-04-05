const db = require('../../db/snacks')
const uuid = require('uuid/v4')
const snacks = []

// working and tested
getAll = () => {
  return db
}

getById = (id) => {
  if (id === db.id) {
    return db.name
  }
}

create = (body) => {
  const name = body.name
  const error = []

  let response
  if (!name) {
    error.push('name is required')
    response = {
      error
    }
  } else {
    const snack = {
      id: uuid(),
      name
    }
    snacks.push(snack)
    response = snack
  }
  return response
}

module.exports = {
  getAll,
  getById,
  create

}