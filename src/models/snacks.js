const db = require('../../db/snacks')
const uuid = require('uuid/v4')
const snacks = []


// working and tested
getAll = (limit) => {
  return limit ? snacks.slice(0, limit) : snacks
}

getById = (id) => {
  const snack = db.find(snack => snack.id === id)
  return snack
}

// working and tested
create = (body) => {
  const error = []
  const {
    name
  } = body

  let response;
  if (!name) {
    error.push("Please add name")
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
// working and tested
update = (id, body) => {
  let snack = snacks.find(snack => snack.id === id)
  console.log("SNACK", snack);
  const index = snacks.indexOf(snack)
  console.log("INDEX", index);
  const error = []
  const {
    name
  } = body

  let response;
  if (!name) {
    error.push("Please add name")
    respone = {
      error
    }
  } else {
    const newSnack = {
      id: uuid(),
      name
    }
    console.log("NEW SNACK", newSnack);
    snacks[index] = newSnack
    response = newSnack
  }
  return response
}

deleteSnack = (id) => {
  let snack = snacks.find(snack => snack.id === id)
  console.log(snack, "snack")
  const index = snacks.indexOf(snack)
  console.log(index, 'index')

  snacks.splice(index, 1)
  if (index === -1) return -1
  return snacks
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteSnack
}