const { DATABASE_NODE_REF, DATABASE_NODE_USER } = require("./utils");

const getUsers = () =>
  DATABASE_NODE_REF.ref(DATABASE_NODE_USER)
    .once("value")
    .then(snap => snap.val())
    .then(val => Object.keys(val).map(key => val[key]));

const addUser = async (_root, args) => {
  const user = {
    name: args.name,
    email: args.email,
    age: args.age
  };
  await DATABASE_NODE_REF.ref(DATABASE_NODE_USER).push(user);
  return user;
};

module.exports = {
  getUsers,
  addUser
};
