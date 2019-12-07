const { gql } = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
const HotDogTypeDefs = gql`
  type Hotdog {
    isKosher: Boolean
    location: String
    name: String
    style: String
    website: String
  }
  extend type Query {
    hotdogs: [Hotdog]
    hotdog(token: String!): Hotdog
  }
  extend type Mutation {
    addHotDog(
      isKosher: Boolean
      location: String
      name: String
      style: String
      website: String
    ): Hotdog
    updateHotDog(
      token: String!
      isKosher: Boolean
      location: String
      name: String
      style: String
      website: String
    ): Hotdog
    deleteHotDog(token: String!): String
  }
`;

module.exports.HotDogTypeDefs = HotDogTypeDefs;
