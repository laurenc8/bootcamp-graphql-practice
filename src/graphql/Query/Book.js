/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const Book = require('../../models/Book')
const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')
const Address = require('../../models/Address')

const allBooks = async () => {
  const books = await Book.query()
  return books
}

const author = async ({ authorId }, params, context) => {
  const a = await Author.query().findOne('id', authorId)
  console.log(a)
  return a
}

const publisher = async ({ publisherId }, params, context) => {
  const p = await Publisher.query().findOne('id', publisherId)
  console.log(p)
  return p
}

const address = async ({ addressId }, params, context) => {
  const p = await Address.query().findOne('id', addressId)
  console.log(p)
  return p
}

const resolver = {
  Query: {
    allBooks,
  },
  Book: {
    author,
    publisher,
  },
  Publisher: {
    address,
  },
}

module.exports = resolver
