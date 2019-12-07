const functions = require("firebase-functions");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { schema } = require("./graphql/index");
// setup express cloud function
const app = express();
const server = new ApolloServer({
  schema
});
server.applyMiddleware({ app, path: "/", cors: true });

exports.graphql = functions.https.onRequest(app);
