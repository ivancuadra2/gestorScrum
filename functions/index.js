const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const admin = require("firebase-admin");

const express = require("express");
const cors = require("cors");

const app = express();

const serviceAccount = require("./permissions.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gestorscrum.firebaseio.com"
});

app.use(cors({ origin: true }));

app.get("/hello-world", (req, res) => {
    return res.status(200).json({ message: "Hello World!" });
});

// Routes
app.use(require("./routes/users.routes"));

exports.app = functions.https.onRequest(app);