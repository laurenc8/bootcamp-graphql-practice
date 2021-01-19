/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const Author = require('../../models/Author')

const createAuthor = async (obj, { input }, context) => {
  const a = await Author.query().insert(input)
  return a
}

const resolver = {
  Mutation: {
    createAuthor,
  },
}

module.exports = resolver
