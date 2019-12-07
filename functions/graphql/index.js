const { makeExecutableSchema } = require("apollo-server-express");
const { merge } = require("lodash");

const { Query, HotDogTypeDefs, UserTypeDefs } = require("./typedefs");
const { HOTDOG_RESOLVERS, USER_RESOLVERS } = require("./resolvers");

const resolvers = merge(HOTDOG_RESOLVERS, USER_RESOLVERS);
const schema = makeExecutableSchema({
  typeDefs: [Query, HotDogTypeDefs, UserTypeDefs],
  resolvers
});
module.exports.schema = schema;
