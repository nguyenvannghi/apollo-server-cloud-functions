const { getUsers, addUser } = require("../../services/user");

module.exports.USER_RESOLVERS = {
  Query: {
    users: () => getUsers()
  },
  Mutation: {
    addUser: (root, args) => addUser(root, args)
  }
};
