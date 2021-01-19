/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const Book = require('../../models/Book')

const createBook = async (obj, { input }, context) => {
  const b = await Book.query().insert(input)
  return b
}

const resolver = {
  Mutation: {
    createBook,
  },
}

module.exports = resolver
