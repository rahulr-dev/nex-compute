const express = require("express");
const router = express.Router();

router.post("/start", (req, res) => {
  res.send("Start a Session");
});

router.post("/end", (req, res) => {
  res.send("End a Session");
});

module.exports = router;
