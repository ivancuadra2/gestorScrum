const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");
const db = admin.firestore();

// Create
router.post("/api/usersPsycho", async (req, res) => {
  try {
    await db
      .collection("usersPsycho")
      .doc()  
      .create(req.body);
    return res.status(200).json();
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

module.exports = router;
