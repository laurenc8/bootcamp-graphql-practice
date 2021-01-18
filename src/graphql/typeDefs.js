const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    # welcome: String!
    author(id: ID!): Author!
    bestsellers: [Book!]
    bigPublishers: [Publisher!]
    searchAuthors(input: String!): [Author!]!
  }
  type Mutation {
    addAuthor(input: addAuthorInput): Author!
    deletePublisher(input: deletePublisherInput): Publisher!
  }
  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
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
  input addAuthorInput {
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    address: Address!
  }
  input deletePublisherInput {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: Address!
  }
`
