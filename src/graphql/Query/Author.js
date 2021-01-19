/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Address = require('../../models/Address')

const allAuthors = async () => {
  try {
    const authors = await Author.query()
    return authors
  } catch (err) {
    console.log(err)
    throw new Error('failed to get authors')
  }
}

const author = async (obj, { authorId }, context) => {
  const a = await Author.query().findOne('id', authorId)
  return a
}

const books = async ({ id }, params, context) => {
  const b = await Book.query().where('authorId', id)
  return b
}

const address = async ({ addressId }, params, context) => {
  const a = await Address.query().findOne('id', addressId)
  return a
}

const resolver = {
  Query: {
    allAuthors,
    author,
  },
  Author: {
    books,
    address,
  },
}

module.exports = resolver
