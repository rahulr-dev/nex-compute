const express = require("express");
const app = express();
const port = 3000;
// Routes
const machine = require("./routes/machine");
const session = require("./routes/session");

app.use("/api/machines", machine);
app.use("/api/sessions", session);

app.get("/api", (req, res) => {
  res.send("NexCompute API is running");
});

app.listen(port, () => {
  console.log(`NexCompute server listening on port ${port}`);
});
