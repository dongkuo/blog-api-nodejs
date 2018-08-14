const knex = require('../connection')

function getAllCategory() {
  return knex('category').select('*')
}

function getSingleCategory(id) {
  return knex('category')
    .select('*')
    .where({id: parseInt(id)})
}

module.exports = {
  getAllCategory,
  getSingleCategory
}