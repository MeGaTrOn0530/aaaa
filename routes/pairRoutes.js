const express = require("express");
const router = express.Router();
const pairController = require("../controllers/pairController");

router.get("/", pairController.getPairs);
router.post("/", pairController.createPair);
router.put("/:id", pairController.updatePair);
router.delete("/:id", pairController.deletePair);

module.exports = router;
