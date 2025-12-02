const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Return All Machines");
});

router.post("/", (req, res) => {
  res.send("Register a Machine");
});

router.get("/:id", (req, res) => {
  res.send(`Return Machine with ID ${req.params.id}`);
});

module.exports = router;
