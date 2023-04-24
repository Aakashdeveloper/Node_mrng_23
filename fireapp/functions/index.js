const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require('body-parser');

admin.initializeApp(functions.config().firebase);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const db = admin.firestore();

exports.addCiti = functions.https.onRequest(async(req,res) => {
    const citiRef = db.collection('maynode22');
    await citiRef.doc('Paris').set({
        "name":"Paris","country":"France","population":7676788
    })
    res.send('Data Added')
})


exports.getCiti = functions.https.onRequest(async(req,res) => {
    const citiRef = db.collection('maynode22');
    const snapshot = await citiRef.get('data');
    const out = [];
    snapshot.forEach(doc => {
        out.push(doc.data())
    })
    res.send(out)
})