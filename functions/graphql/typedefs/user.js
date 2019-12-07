const { gql } = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
const UserTypeDefs = gql`
  type User {
    name: String
    email: String!
    age: Int
  }
  extend type Query {
    users: [User]
  }
  extend type Mutation {
    addUser(name: String, email: String!, age: Int): User
  }
`;

module.exports.UserTypeDefs = UserTypeDefs;
