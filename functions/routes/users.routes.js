const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");
const db = admin.firestore();

// Create
router.post("/api/usersPsycho", async (req, res) => {
  try {
    const usersCollectionRef = db.collection("usersPsycho");
    const userQuery = await usersCollectionRef
      .where("uid", "==", req.body.uid)
      .where("name", "==", req.body.name)
      .where("age", "==", req.body.age)
      .where("male", "==", req.body.male)
      .where("country", "==", req.body.country)
      .get();
    const userExists = userQuery.size > 0;
    if (userExists) {
      const documentId = userQuery.docs[0].id;
      return res.status(200).send(documentId);
    }
    const documentRef = usersCollectionRef.doc();
    const documentId = documentRef.id;
    await documentRef.create(req.body);
    return res.status(200).send(documentId);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/api/usersPsycho/:usersPsycho_id", (req, res) => {
  (async () => {
    try {
      const doc = db.collection("usersPsycho").doc(req.params.usersPsycho_id);
      const item = await doc.get();
      const response = item.data();
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});

router.get("/api/usersPsycho", async (req, res) => {
  try {
    let query = db.collection("usersPsycho");
    const querySnapshot = await query.get();
    let docs = querySnapshot.docs;

    const response = docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
    }));

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put("/api/usersPsycho/:usersPsycho_id", async (req, res) => {
  try {
    const document = db.collection("usersPsycho").doc(req.params.usersPsycho);
    await document.update({
      name: req.body.name,
    });
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json();
  }
});

router.delete("/api/usersPsycho/:usersPsycho_id", async (req, res) => {
  try {
    const doc = db.collection("usersPsycho").doc(req.params.usersPsychoid);
    await doc.delete();
    return res.status(200).json();
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/api/metrics", async (req, res) => {
  try {
    const documentRef = db.collection("usersPsycho").doc(req.body.hash);
    const document = await documentRef.get();
    if (document.exists) {
      const documentActions = await document.get("actions") || [];
      const actions = req.body.actions.split("_");
      for (a of actions) {
        let index = 0;
        const actionData = a.split("|");
        if (actionData.length > 1) {
          const actionId = actionData[index++];
          const objectId = actionData[index++];
          const value = actionData[index++];
          const date = actionData[index];
          documentActions.push({ actionId, objectId, value, date });
        }
      }
      await documentRef.update({ actions: documentActions });
      return res.status(200).send("ok");
    }
    return res.status(404);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
