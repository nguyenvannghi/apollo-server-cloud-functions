const admin = require("firebase-admin");
const serviceAccount = require("./privatekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kaiju-9f6ba.firebaseio.com"
});

const DATABASE_NODE = "hotdogs";
const DATABASE_NODE_USER = "users";
const DATABASE_NODE_REF = admin.database();

module.exports = {
  DATABASE_NODE,
  DATABASE_NODE_USER,
  DATABASE_NODE_REF
};
