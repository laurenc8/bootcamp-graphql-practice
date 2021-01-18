const Author = require('../../models/Author')

const allAuthors = async () => {
  try {
    const authors = await Author.query()
    return authors
  } catch (err) {
    console.log(err)
    throw new Error('failed to get authors')
  }
}

const resolver = {
  Query: {
    allAuthors,
  }
}

module.exports = resolver