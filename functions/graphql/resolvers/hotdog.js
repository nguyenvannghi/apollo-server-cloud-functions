const {
  getHotDogs,
  getHotDog,
  addHotDog,
  updateHotDog,
  deleteHotDog
} = require("../../services/hotdog");

module.exports.HOTDOG_RESOLVERS = {
  Query: {
    hotdogs: () => getHotDogs(),
    hotdog: (_root, args) => getHotDog(args.token)
  },
  Mutation: {
    addHotDog: (root, args) => addHotDog(root, args),
    updateHotDog: (root, args) => updateHotDog(root, args),
    deleteHotDog: (root, args) => deleteHotDog(root, args)
  }
};
