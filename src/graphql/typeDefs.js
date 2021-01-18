const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    # welcome: String!
    allBooks: [Book!]!
    allPublishers: [Publisher!]!
    allAuthors: [Author!]!
    book(bookId: ID!): Book!
    author(authorId: ID!): Author!
    bestsellers: [Book!]
    publisher(publisherId: ID!): Publisher!
    searchAuthors(input: String!): [Author!]!
  }
  type Mutation {
    createBook(input: CreateBookInput!): Book!
    createAuthor(input: CreateAuthorInput!): Author!
  }
  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
    createdAt: String!
  }
  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int
    address: Address
    books: [Book!]!
    createdAt: String!
  }
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: String
    address: Address
    books: [Book!]!
    createdAt: String!
  }
  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int
    datePublished: Int
    bestseller: Boolean
    author: Author!
    publisher: Publisher!
    createdAt: String!
  }
  input CreateBookInput {
    title: String!
    language: String!
    numPages: Int
    datePublished: Int
    bestseller: Boolean
    authorId: String!
    publisherId: String!
  }
  input CreateAuthorInput {
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    address: Address!
  }
`
