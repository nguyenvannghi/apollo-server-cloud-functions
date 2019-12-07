const { DATABASE_NODE, DATABASE_NODE_REF } = require("./utils");

const getHotDogs = () =>
  DATABASE_NODE_REF.ref(DATABASE_NODE)
    .once("value")
    .then(snap => snap.val())
    .then(val => Object.keys(val).map(key => val[key]));

const getHotDog = token =>
  DATABASE_NODE_REF.ref(DATABASE_NODE)
    .once("value")
    .then(snap => snap.val())
    .then(val => val[token]);

const addHotDog = async (_root, args) => {
  const hotdog = {
    isKosher: args.isKosher,
    location: args.location,
    name: args.name,
    style: args.style,
    website: args.website
  };
  await DATABASE_NODE_REF.ref(DATABASE_NODE).push(hotdog);
  return hotdog;
};

const updateHotDog = async (_root, args) => {
  const dbsRef = DATABASE_NODE_REF.ref(`${DATABASE_NODE}/${args.token}`);
  const hotdog = {
    isKosher: args.isKosher,
    location: args.location,
    name: args.name,
    style: args.style,
    website: args.website
  };
  await dbsRef.update(hotdog);
  return hotdog;
};

const deleteHotDog = async (_root, args) => {
  await DATABASE_NODE_REF.ref(`${DATABASE_NODE}/${args.token}`).remove();
  return args.token;
};

module.exports = {
  getHotDogs,
  getHotDog,
  addHotDog,
  updateHotDog,
  deleteHotDog
};
