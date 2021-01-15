const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    authorById(id: ID!): Author!
    bestsellers: [Book!]
    bigPublishers: [Publisher!]
  }
  type Mutation {
    addAuthor(input: addAuthorInput): Author!
    deletePublisher(input: deletePublisherInput): Publisher!
  }
  input addAuthorInput {
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: String!
    address: Address!
  }
  input deletePublisherInput {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: Address!
  }
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: String!
    address: Address!
  }
  type Address {
    id: ID!
  }
  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int!
    datePublished: Int!
    bestseller: Boolean!
    author: Author!
    publisher: Publisher!
  }
  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: Address!
  }
`
